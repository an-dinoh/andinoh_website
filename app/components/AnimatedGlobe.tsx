"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/app/context/ThemeContext";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

export default function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { primaryColor } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 600 * dpr;
    canvas.height = 600 * dpr;
    canvas.style.width = "600px";
    canvas.style.height = "600px";
    ctx.scale(dpr, dpr);

    const centerX = 300;
    const centerY = 300;
    const radius = 200;
    let rotation = 0;

    // Load Africa image
    const africaImg = new Image();
    africaImg.src = "/images/835.png";
    let africaImgLoaded = false;
    africaImg.onload = () => {
      africaImgLoaded = true;
    };

    // African cities (destinations) - expanded list
    const africanCities: Location[] = [
      { lat: 6.5244, lng: 3.3792, name: "Lagos" },
      { lat: -1.2864, lng: 36.8172, name: "Nairobi" },
      { lat: -33.9249, lng: 18.4241, name: "Cape Town" },
      { lat: 30.0444, lng: 31.2357, name: "Cairo" },
      { lat: 9.0320, lng: 38.7469, name: "Addis Ababa" },
      { lat: -26.2041, lng: 28.0473, name: "Johannesburg" },
      { lat: 33.5731, lng: -7.5898, name: "Casablanca" },
      { lat: -4.4419, lng: 15.2663, name: "Kinshasa" },
      { lat: 5.6037, lng: -0.1870, name: "Accra" },
      { lat: 14.4974, lng: -14.4524, name: "Dakar" },
      { lat: -15.4167, lng: 28.2833, name: "Lusaka" },
      { lat: 15.3229, lng: 38.9251, name: "Asmara" },
      { lat: -25.7479, lng: 28.2293, name: "Pretoria" },
      { lat: 12.3714, lng: -1.5197, name: "Ouagadougou" },
    ];

    // Major cities around the world (origins) - dramatically expanded
    const worldCities: Location[] = [
      // Europe
      { lat: 51.5074, lng: -0.1278, name: "London" },
      { lat: 48.8566, lng: 2.3522, name: "Paris" },
      { lat: 52.5200, lng: 13.4050, name: "Berlin" },
      { lat: 41.9028, lng: 12.4964, name: "Rome" },
      { lat: 40.4168, lng: -3.7038, name: "Madrid" },
      { lat: 55.7558, lng: 37.6173, name: "Moscow" },
      { lat: 59.3293, lng: 18.0686, name: "Stockholm" },
      { lat: 50.8503, lng: 4.3517, name: "Brussels" },
      { lat: 52.3676, lng: 4.9041, name: "Amsterdam" },
      { lat: 47.4979, lng: 19.0402, name: "Budapest" },

      // North America
      { lat: 40.7128, lng: -74.0060, name: "New York" },
      { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
      { lat: 41.8781, lng: -87.6298, name: "Chicago" },
      { lat: 29.7604, lng: -95.3698, name: "Houston" },
      { lat: 43.6532, lng: -79.3832, name: "Toronto" },
      { lat: 49.2827, lng: -123.1207, name: "Vancouver" },
      { lat: 19.4326, lng: -99.1332, name: "Mexico City" },
      { lat: 25.7617, lng: -80.1918, name: "Miami" },

      // South America
      { lat: -23.5505, lng: -46.6333, name: "São Paulo" },
      { lat: -22.9068, lng: -43.1729, name: "Rio de Janeiro" },
      { lat: -34.6037, lng: -58.3816, name: "Buenos Aires" },
      { lat: -12.0464, lng: -77.0428, name: "Lima" },
      { lat: 4.7110, lng: -74.0721, name: "Bogotá" },
      { lat: -33.4489, lng: -70.6693, name: "Santiago" },

      // Asia
      { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
      { lat: 39.9042, lng: 116.4074, name: "Beijing" },
      { lat: 31.2304, lng: 121.4737, name: "Shanghai" },
      { lat: 1.3521, lng: 103.8198, name: "Singapore" },
      { lat: 37.5665, lng: 126.9780, name: "Seoul" },
      { lat: 28.6139, lng: 77.2090, name: "New Delhi" },
      { lat: 19.0760, lng: 72.8777, name: "Mumbai" },
      { lat: 13.7563, lng: 100.5018, name: "Bangkok" },
      { lat: 25.2048, lng: 55.2708, name: "Dubai" },
      { lat: 23.8103, lng: 90.4125, name: "Dhaka" },
      { lat: 33.3152, lng: 44.3661, name: "Baghdad" },
      { lat: 41.0082, lng: 28.9784, name: "Istanbul" },

      // Oceania
      { lat: -33.8688, lng: 151.2093, name: "Sydney" },
      { lat: -37.8136, lng: 144.9631, name: "Melbourne" },
      { lat: -36.8485, lng: 174.7633, name: "Auckland" },

      // Additional far-flung cities
      { lat: 64.1466, lng: -21.9426, name: "Reykjavik" },
      { lat: -54.8019, lng: -68.3029, name: "Ushuaia" },
      { lat: 71.5388, lng: -156.7894, name: "Utqiaġvik" },
    ];

    // Animated arcs/lines - from world to Africa (dramatically increased)
    const arcs: Array<{
      from: Location;
      to: Location;
      progress: number;
      speed: number;
    }> = [];

    // Create 3 arcs from world cities TO African cities
    for (let i = 0; i < 3; i++) {
      const from = worldCities[Math.floor(Math.random() * worldCities.length)];
      const to = africanCities[Math.floor(Math.random() * africanCities.length)];
      arcs.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.004,
      });
    }

    function latLngToPoint(lat: number, lng: number, rot: number) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = ((lng + rot) % 360) * (Math.PI / 180);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      return {
        x: centerX + x,
        y: centerY - y,
        z: z,
        visible: z > -radius * 0.3,
      };
    }

    function drawGlobe() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe circle (transparent)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = primaryColor + "10";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lng = 0; lng <= 360; lng += 5) {
          const point = latLngToPoint(lat, lng, rotation);
          if (point.visible) {
            if (lng === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        ctx.strokeStyle = primaryColor + "15";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const point = latLngToPoint(lat, lng, rotation);
          if (point.visible) {
            if (lat === -90) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        ctx.strokeStyle = primaryColor + "15";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw Africa image if loaded (always visible, even when rotated to back)
      if (africaImgLoaded) {
        ctx.save();

        // Create clipping path for the globe
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.clip();

        // Calculate Africa center position (approximate center of Africa)
        const africaCenterLat = 0;
        const africaCenterLng = 20;
        const africaCenter = latLngToPoint(africaCenterLat, africaCenterLng, rotation);

        // Calculate scale based on z-depth for 3D effect
        const scale = 1 + (africaCenter.z / radius) * 0.3;
        const imgWidth = 280 * scale;
        const imgHeight = 280 * scale;

        // Keep opacity consistent - always visible
        ctx.globalAlpha = 0.8;

        // Draw the Africa image centered on Africa's position
        ctx.drawImage(
          africaImg,
          africaCenter.x - imgWidth / 2,
          africaCenter.y - imgHeight / 2,
          imgWidth,
          imgHeight
        );

        ctx.globalAlpha = 1;

        ctx.restore();
      }

      // Draw world city dots (smaller, subtle)
      worldCities.forEach((loc) => {
        const point = latLngToPoint(loc.lat, loc.lng, rotation);
        if (point.visible) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#9CA3AF";
          ctx.fill();
        }
      });

      // Draw African city dots (larger, prominent)
      africanCities.forEach((loc) => {
        const point = latLngToPoint(loc.lat, loc.lng, rotation);
        if (point.visible) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();

          // Pulsing ring
          ctx.beginPath();
          ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
          ctx.strokeStyle = primaryColor + "60";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      // Draw animated arcs
      arcs.forEach((arc) => {
        arc.progress += arc.speed;
        if (arc.progress > 1) {
          arc.progress = 0;
          // Randomly select new world origin and African destination
          arc.from = worldCities[Math.floor(Math.random() * worldCities.length)];
          arc.to = africanCities[Math.floor(Math.random() * africanCities.length)];
        }

        const fromPoint = latLngToPoint(arc.from.lat, arc.from.lng, rotation);
        const toPoint = latLngToPoint(arc.to.lat, arc.to.lng, rotation);

        if (fromPoint.visible || toPoint.visible) {
          // Draw curved arc
          const steps = 50;
          ctx.beginPath();
          for (let i = 0; i <= steps * arc.progress; i++) {
            const t = i / steps;

            // Bezier curve for arc
            const midLat = (arc.from.lat + arc.to.lat) / 2;
            const midLng = (arc.from.lng + arc.to.lng) / 2;
            const heightOffset = 60; // Increased from 30 to 60 for more elevation

            const lat = arc.from.lat * (1 - t) * (1 - t) + midLat * 2 * (1 - t) * t + arc.to.lat * t * t;
            const lng = arc.from.lng * (1 - t) * (1 - t) + midLng * 2 * (1 - t) * t + arc.to.lng * t * t;

            const point = latLngToPoint(lat, lng, rotation);

            // Add height to arc
            const arcHeight = Math.sin(t * Math.PI) * heightOffset;
            const adjustedY = point.y - arcHeight;

            if (i === 0) {
              ctx.moveTo(point.x, adjustedY);
            } else {
              ctx.lineTo(point.x, adjustedY);
            }
          }

          // Gradient for arc
          const gradient = ctx.createLinearGradient(fromPoint.x, fromPoint.y, toPoint.x, toPoint.y);
          gradient.addColorStop(0, primaryColor + "00");
          gradient.addColorStop(arc.progress, primaryColor);
          gradient.addColorStop(1, primaryColor + "00");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw moving dot
          const t = arc.progress;
          const midLat = (arc.from.lat + arc.to.lat) / 2;
          const midLng = (arc.from.lng + arc.to.lng) / 2;
          const lat = arc.from.lat * (1 - t) * (1 - t) + midLat * 2 * (1 - t) * t + arc.to.lat * t * t;
          const lng = arc.from.lng * (1 - t) * (1 - t) + midLng * 2 * (1 - t) * t + arc.to.lng * t * t;
          const dotPoint = latLngToPoint(lat, lng, rotation);
          const arcHeight = Math.sin(t * Math.PI) * 60; // Increased from 30 to 60

          ctx.beginPath();
          ctx.arc(dotPoint.x, dotPoint.y - arcHeight, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#FBB81F";
          ctx.fill();

          // Glow effect
          ctx.beginPath();
          ctx.arc(dotPoint.x, dotPoint.y - arcHeight, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#FBB81F40";
          ctx.fill();
        }
      });

      rotation += 0.2;
    }

    const interval = setInterval(drawGlobe, 1000 / 60);

    return () => clearInterval(interval);
  }, [primaryColor]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-full max-h-full"
        style={{ width: "600px", height: "600px" }}
      />
    </div>
  );
}
