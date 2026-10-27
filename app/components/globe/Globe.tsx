"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { AFRICA, WORLD } from "./world";

type Vec = [number, number, number];
type LatLng = [number, number];

const RAD = Math.PI / 180;
/** Earth's axial tilt: the axis leans like a desk globe's, north pole to the right. */
const AXIAL_TILT = 23.4 * RAD;
/** One full turn, west to east like the real Earth. */
const TURN_MS = 150_000;
/** The longitude facing the viewer at the start (Africa). */
const START_LNG = 17;

const CITY = {
  lagos: [6.52, 3.38], accra: [5.6, -0.19], nairobi: [-1.29, 36.82], johannesburg: [-26.2, 28.05],
  cairo: [30.04, 31.24], casablanca: [33.57, -7.59], addis: [9.03, 38.75],
  london: [51.51, -0.13], paris: [48.86, 2.35], newYork: [40.71, -74.0], toronto: [43.65, -79.38],
  saoPaulo: [-23.55, -46.63], dubai: [25.2, 55.27], mumbai: [19.08, 72.88], beijing: [39.9, 116.4],
  istanbul: [41.01, 28.98], sydney: [-33.87, 151.21],
} satisfies Record<string, LatLng>;

/** Flights from other continents into Africa. */
const ROUTES: [LatLng, LatLng][] = [
  [CITY.london, CITY.lagos], [CITY.newYork, CITY.accra], [CITY.paris, CITY.casablanca], [CITY.dubai, CITY.nairobi],
  [CITY.mumbai, CITY.nairobi], [CITY.beijing, CITY.addis], [CITY.saoPaulo, CITY.johannesburg], [CITY.toronto, CITY.lagos],
  [CITY.istanbul, CITY.cairo], [CITY.sydney, CITY.johannesburg],
];
const DESTINATIONS = [CITY.accra, CITY.nairobi, CITY.johannesburg, CITY.cairo, CITY.casablanca, CITY.addis];

const toVec = ([lat, lng]: LatLng): Vec => {
  const p = lat * RAD, l = lng * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};
const pairs = (flat: number[]): Vec[] => Array.from({ length: flat.length / 2 }, (_, i) => toVec([flat[i * 2], flat[i * 2 + 1]]));

// Built once: an even scatter of ocean dots (Fibonacci lattice), the land, and the routes.
const OCEAN: Vec[] = (() => {
  const n = 1200, g = Math.PI * (3 - Math.sqrt(5)), out: Vec[] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i;
    out.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return out;
})();
const AFRICA_V = pairs(AFRICA);
const WORLD_V = pairs(WORLD);
const LAGOS_V = toVec(CITY.lagos);
const DEST_V = DESTINATIONS.map(toVec);
const ARCS = ROUTES.map(([from, to], i) => {
  const a = toVec(from), b = toVec(to);
  const om = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
  // Long-haul flights take a little longer to land.
  return { a, b, om, so: Math.sin(om), phase: i / ROUTES.length, speed: 4200 + om * 2600 };
});

/**
 * A dotted globe: the continents in soft slate, Africa in brand blue, gold flights arcing in from
 * the rest of the world, and a pulse on Lagos. It spins west to east on a tilted axis, like the Earth.
 * In the hero ("rise") the photo hides the bottom half of the canvas.
 * Decorative: hidden from assistive tech, paused off screen, still when the visitor prefers reduced motion.
 */
export default function Globe({ view = "rise", className = "" }: { view?: "rise" | "corner"; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const dark = theme === "dark";
    const blue = dark ? "75,163,227" : "15,117,189";
    const slate = dark ? "148,163,184" : "100,116,139";
    const rgba = (c: string, a: number) => `rgba(${c},${a})`;

    const draw = (t: number) => {
      const S = canvas.clientWidth;
      if (!S) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const px = Math.round(S * dpr);
      if (canvas.width !== px) { canvas.width = px; canvas.height = px; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, S, S);

      const cx = S / 2, cy = S / 2, R = S * 0.4;

      // Spin: the longitude facing the viewer decreases over time, so the surface moves left to right
      // (west to east), as the real Earth turns.
      const lngC = (START_LNG - (360 * t) / TURN_MS) * RAD;
      // "rise" looks from a little south of the equator: Europe shows near the top, and Lagos and
      // West Africa sit above the hero photo that covers the bottom half.
      const latC = (view === "rise" ? -10 : 6) * RAD;
      const cl = Math.cos(lngC), sl = Math.sin(lngC), cp = Math.cos(latC), sp = Math.sin(latC);
      const ct = Math.cos(AXIAL_TILT), st = Math.sin(AXIAL_TILT);
      const proj = (v: Vec, lift = 1): Vec => {
        // Turn the globe, look at it from latC, then lean the axis on screen.
        const x1 = v[0] * cl - v[2] * sl, z1 = v[0] * sl + v[2] * cl;
        const y2 = v[1] * cp - z1 * sp, z2 = v[1] * sp + z1 * cp;
        const dx = R * x1 * lift, dy = -R * y2 * lift;
        return [cx + dx * ct - dy * st, cy + dx * st + dy * ct, z2];
      };

      // Glow (fades out just inside the canvas so it never shows an edge) and the sphere.
      const gR = S / 2 - 1;
      const glow = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, gR);
      glow.addColorStop(0, rgba(blue, dark ? 0.32 : 0.2));
      glow.addColorStop(1, rgba(blue, 0));
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, gR, 0, Math.PI * 2); ctx.fill();

      const body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, dark ? "rgba(37,137,210,0.20)" : "rgba(255,255,255,0.95)");
      body.addColorStop(1, dark ? "rgba(10,30,52,0.9)" : "rgba(228,239,248,0.95)");
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = rgba(blue, dark ? 0.45 : 0.3);
      ctx.lineWidth = 1;
      ctx.stroke();

      const dot = Math.max(0.8, S / 900);
      // Ocean: a faint even scatter.
      for (const v of OCEAN) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.fillStyle = rgba(blue, (dark ? 0.2 : 0.14) * p[2]);
        ctx.fillRect(p[0] - dot / 2, p[1] - dot / 2, dot, dot);
      }
      // The other continents in slate.
      const wd = dot * 1.6;
      for (const v of WORLD_V) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.fillStyle = rgba(slate, (dark ? 0.32 : 0.24) + (dark ? 0.48 : 0.36) * p[2]);
        ctx.fillRect(p[0] - wd / 2, p[1] - wd / 2, wd, wd);
      }
      // Africa in brand blue, slightly larger.
      const ad = dot * 2.1;
      for (const v of AFRICA_V) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.fillStyle = rgba(blue, dark ? 0.35 + 0.6 * p[2] : 0.3 + 0.55 * p[2]);
        ctx.beginPath(); ctx.arc(p[0], p[1], ad / 2, 0, Math.PI * 2); ctx.fill();
      }

      // Flights: a gold trail along the great circle, lifted off the surface mid-flight.
      for (const arc of ARCS) {
        const { a, b, om, so } = arc;
        const prog = ((t / arc.speed + arc.phase) % 1) * 1.4;
        const head = Math.min(1, prog), tail = Math.max(0, prog - 0.45);
        if (head <= tail) continue;
        let prev: Vec | null = null;
        for (let i = 0; i <= 48; i++) {
          const s = tail + (head - tail) * (i / 48);
          const w1 = Math.sin((1 - s) * om) / so, w2 = Math.sin(s * om) / so;
          const p = proj([a[0] * w1 + b[0] * w2, a[1] * w1 + b[1] * w2, a[2] * w1 + b[2] * w2], 1 + 0.2 * Math.sin(Math.PI * s));
          if (prev && p[2] > -0.15 && prev[2] > -0.15) {
            ctx.strokeStyle = `rgba(251,184,31,${0.9 * (i / 48)})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(p[0], p[1]); ctx.stroke();
          }
          prev = p;
        }
      }

      // Arrivals: small gold dots, and a pulse on Lagos.
      ctx.fillStyle = "#FBB81F";
      for (const v of DEST_V) {
        const p = proj(v);
        if (p[2] <= 0) continue;
        ctx.beginPath(); ctx.arc(p[0], p[1], 2.5, 0, Math.PI * 2); ctx.fill();
      }
      const L = proj(LAGOS_V);
      if (L[2] > 0) {
        const ph = (t / 2000) % 1;
        ctx.strokeStyle = `rgba(251,184,31,${0.7 * (1 - ph)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(L[0], L[1], 4 + 18 * ph, 0, Math.PI * 2); ctx.stroke();
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
  }, [view, theme]);

  return <canvas ref={ref} aria-hidden="true" className={`block aspect-square ${className}`} />;
}
