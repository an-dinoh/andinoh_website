"use client";

import Image, { getImageProps, type ImageLoader } from "next/image";
import { useEffect, useRef, useState } from "react";
import { PHOTO_BLUR } from "@/app/content/photo-blur";
import { CLOUDINARY_CLOUD, type Photo } from "@/app/content/site";

/** Cloudinary resizes on its CDN and picks the best format (AVIF/WebP) and quality for each browser. */
const cloudLoader = (photo: Photo): ImageLoader => ({ width }) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/${photo.cloud}`;

/** Where a photo is coming from: Cloudinary, then the local copy, then nothing (the blurred preview stays). */
type Source = "cloud" | "local" | "none";
const next = (s: Source): Source => (s === "cloud" ? "local" : "none");

/** The blurred preview, behind the photo. With no photo at all it is what's left, so the layout never shows a broken image. */
function Preview({ blur, className = "" }: { blur?: string; className?: string }) {
  if (!blur) return <div aria-hidden className={`absolute inset-0 bg-soft ${className}`} />;
  return (
    <div
      aria-hidden
      className={`absolute inset-0 scale-110 bg-cover bg-center blur-2xl ${className}`}
      style={{ backgroundImage: `url(${blur})` }}
    />
  );
}

/**
 * A photo that fills its (positioned) parent. It loads from Cloudinary first, shows a blurred preview
 * while it does, falls back to the local copy in public/ if Cloudinary can't be reached, and if that fails
 * too, keeps the blurred preview.
 */
export default function CloudImage({ photo, sizes, priority = false, className = "" }: {
  photo: Photo;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [source, setSource] = useState<Source>("cloud");
  const blur = PHOTO_BLUR[photo.name];
  if (source === "none") {
    if (process.env.NODE_ENV !== "production") console.warn(`[photo] ${photo.name} failed from Cloudinary and locally`);
    return <Preview blur={blur} />;
  }
  return (
    <Image
      key={source}
      src={source === "cloud" ? photo.cloud : photo.src}
      {...(source === "cloud" ? { loader: cloudLoader(photo) } : {})}
      onError={() => setSource(next)}
      alt={photo.alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      {...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {})}
      {...(priority ? { preload: true } : {})}
    />
  );
}

/**
 * The home hero: a landscape photo from tablets up and a portrait one on phones, as one <picture>, so each
 * device downloads only its own. Cloudinary first, local copies if it can't be reached, the blurred
 * previews if neither loads.
 */
export function HeroPicture({ desktop, mobile, alt, className = "" }: { desktop: Photo; mobile: Photo; alt: string; className?: string }) {
  const [source, setSource] = useState<Source>("cloud");
  const imgRef = useRef<HTMLImageElement>(null);
  // The hero starts loading from the server HTML, so Cloudinary can fail before React attaches onError.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setSource(next); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const cloud = source === "cloud";
  const base = { alt, fill: true, fetchPriority: "high" as const, loading: "eager" as const };
  const wide = getImageProps({
    ...base,
    sizes: "(min-width: 1200px) 1136px, 100vw",
    src: cloud ? desktop.cloud : desktop.src,
    ...(cloud ? { loader: cloudLoader(desktop) } : {}),
  }).props;
  const tall = getImageProps({
    ...base,
    sizes: "100vw",
    src: cloud ? mobile.cloud : mobile.src,
    ...(cloud ? { loader: cloudLoader(mobile) } : {}),
  }).props;

  return (
    <>
      {/* Blurred previews sit behind the photo until it has loaded and covers them. */}
      <Preview blur={PHOTO_BLUR[mobile.name]} className="sm:hidden" />
      <Preview blur={PHOTO_BLUR[desktop.name]} className="hidden sm:block" />
      {source !== "none" && (
        <picture key={source}>
          <source media="(min-width: 640px)" srcSet={wide.srcSet} sizes={wide.sizes} />
          <img {...tall} ref={imgRef} alt={alt} onError={() => setSource(next)} className={`object-cover ${className}`} />
        </picture>
      )}
    </>
  );
}
