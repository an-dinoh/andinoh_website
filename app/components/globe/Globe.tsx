"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { AFRICA } from "./africa";

type Vec = [number, number, number];

const RAD = Math.PI / 180;
const LAGOS: [number, number] = [6.52, 3.38];
// Cities whose flights arc into Lagos.
const ORIGINS: [number, number][] = [
  [51.5, -0.13], [40.7, -74.0], [25.2, 55.3], [-1.29, 36.8], [-26.2, 28.0], [48.86, 2.35], [30.04, 31.24],
];

const toVec = (lat: number, lng: number): Vec => {
  const p = lat * RAD, l = lng * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};

// Built once: an even scatter of ocean dots (Fibonacci lattice), Africa's dots, and the arcs.
const GRID: Vec[] = (() => {
  const n = 1500, g = Math.PI * (3 - Math.sqrt(5)), out: Vec[] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i;
    out.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return out;
})();
const LAND: Vec[] = Array.from({ length: AFRICA.length / 2 }, (_, i) => toVec(AFRICA[i * 2], AFRICA[i * 2 + 1]));
const TO = toVec(...LAGOS);
const ARCS = ORIGINS.map((o, i) => ({ from: toVec(o[0], o[1]), phase: i / ORIGINS.length }));

/**
 * A dotted globe with Africa lit in brand blue, a gold pulse on Lagos and flights arcing in.
 * "rise" tilts the view so Africa sits in the top half (the hero hides the bottom half behind the photo).
 * Decorative: hidden from assistive tech, paused off screen, still when the visitor prefers reduced motion.
 */
export default function Globe({ view = "rise", className = "" }: { view?: "rise" | "corner"; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;

    const draw = (t: number) => {
      const S = canvas.clientWidth;
      if (!S) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const px = Math.round(S * dpr);
      if (canvas.width !== px) { canvas.width = px; canvas.height = px; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, S, S);

      const dark = themeRef.current === "dark";
      const blue = dark ? "75,163,227" : "15,117,189";
      const rgba = (a: number) => `rgba(${blue},${a})`;
      const cx = S / 2, cy = S / 2, R = S * 0.4;

      // A slow sweep back and forth so Africa stays in view.
      const lngC = (17 + 55 * Math.sin(t / 9000)) * RAD;
      const latC = (view === "rise" ? -28 : 6) * RAD;
      const cl = Math.cos(lngC), sl = Math.sin(lngC), cp = Math.cos(latC), sp = Math.sin(latC);
      const proj = (v: Vec, lift = 1): Vec => {
        const x1 = v[0] * cl - v[2] * sl, z1 = v[0] * sl + v[2] * cl;
        const y2 = v[1] * cp - z1 * sp, z2 = v[1] * sp + z1 * cp;
        return [cx + R * x1 * lift, cy - R * y2 * lift, z2];
      };

      // Glow and sphere. The glow fades out just inside the canvas so it never shows a hard edge.
      const gR = S / 2 - 1;
      const glow = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, gR);
      glow.addColorStop(0, rgba(dark ? 0.32 : 0.2));
      glow.addColorStop(1, rgba(0));
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, gR, 0, Math.PI * 2); ctx.fill();

      const body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, dark ? "rgba(37,137,210,0.20)" : "rgba(255,255,255,0.95)");
      body.addColorStop(1, dark ? "rgba(10,30,52,0.9)" : "rgba(228,239,248,0.95)");
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = rgba(dark ? 0.45 : 0.3);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Ocean dots, then Africa.
      const dot = Math.max(0.8, S / 900);
      for (const v of GRID) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.fillStyle = rgba((dark ? 0.28 : 0.2) * p[2]);
        ctx.fillRect(p[0] - dot / 2, p[1] - dot / 2, dot, dot);
      }
      const ld = dot * 2.1;
      for (const v of LAND) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.fillStyle = rgba(dark ? 0.35 + 0.6 * p[2] : 0.28 + 0.5 * p[2]);
        ctx.beginPath(); ctx.arc(p[0], p[1], ld / 2, 0, Math.PI * 2); ctx.fill();
      }

      // Flights into Lagos: a gold trail along the great circle, lifted off the surface mid-flight.
      for (const a of ARCS) {
        const f = a.from;
        const om = Math.acos(Math.max(-1, Math.min(1, f[0] * TO[0] + f[1] * TO[1] + f[2] * TO[2])));
        if (om < 0.01) continue;
        const so = Math.sin(om);
        const prog = ((t / 5200 + a.phase) % 1) * 1.4;
        const head = Math.min(1, prog), tail = Math.max(0, prog - 0.45);
        if (head <= tail) continue;
        let prev: Vec | null = null;
        for (let i = 0; i <= 40; i++) {
          const s = tail + (head - tail) * (i / 40);
          const w1 = Math.sin((1 - s) * om) / so, w2 = Math.sin(s * om) / so;
          const p = proj([f[0] * w1 + TO[0] * w2, f[1] * w1 + TO[1] * w2, f[2] * w1 + TO[2] * w2], 1 + 0.22 * Math.sin(Math.PI * s));
          if (prev && p[2] > -0.15 && prev[2] > -0.15) {
            ctx.strokeStyle = `rgba(251,184,31,${0.9 * (i / 40)})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(p[0], p[1]); ctx.stroke();
          }
          prev = p;
        }
      }

      // Lagos.
      const L = proj(TO);
      if (L[2] > 0) {
        const ph = (t / 2000) % 1;
        ctx.strokeStyle = `rgba(251,184,31,${0.7 * (1 - ph)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(L[0], L[1], 4 + 18 * ph, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "#FBB81F";
        ctx.beginPath(); ctx.arc(L[0], L[1], 4, 0, Math.PI * 2); ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw(0);
      const onResize = () => draw(0);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    // Only animate while on screen.
    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
    // theme: redraw at once when it flips (the still globe has no loop to pick it up).
  }, [view, theme]);

  return <canvas ref={ref} aria-hidden="true" className={`block aspect-square ${className}`} />;
}
