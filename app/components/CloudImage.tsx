"use client";

import Image, { getImageProps, type ImageLoader } from "next/image";
import { useEffect, useRef, useState } from "react";
import { PHOTO_BLUR } from "@/app/content/photo-blur";
import { CLOUDINARY_CLOUD, type Photo } from "@/app/content/site";

/** Cloudinary resizes on its CDN and picks the best format (AVIF/WebP) and quality for each browser. */
const cloudLoader = (photo: Photo): ImageLoader => ({ width }) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/${photo.cloud}`;

/**
 * A photo that fills its (positioned) parent. It loads from Cloudinary first, shows a blurred preview
 * while it does, and falls back to the local copy in public/ if Cloudinary can't be reached.
 */
export default function CloudImage({ photo, sizes, priority = false, className = "" }: {
  photo: Photo;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const blur = PHOTO_BLUR[photo.name];
  const common = {
    alt: photo.alt,
    fill: true,
    sizes,
    className: `object-cover ${className}`,
    ...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {}),
    ...(priority ? { preload: true } : {}),
  };
  return failed ? (
    <Image key="local" src={photo.src} {...common} alt={photo.alt} />
  ) : (
    <Image key="cloud" src={photo.cloud} loader={cloudLoader(photo)} onError={() => setFailed(true)} {...common} alt={photo.alt} />
  );
}

/**
 * The home hero: a landscape photo from tablets up and a portrait one on phones, as one <picture>, so each
 * device downloads only its own. Cloudinary first, local copies if it can't be reached.
 */
export function HeroPicture({ desktop, mobile, alt, className = "" }: { desktop: Photo; mobile: Photo; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // The hero starts loading from the server HTML, so Cloudinary can fail before React attaches onError.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);
  const cloud = !failed;
  const base = { alt: desktop.alt, fill: true, fetchPriority: "high" as const, loading: "eager" as const };
  const wide = getImageProps({
    ...base,
    sizes: "(min-width: 1200px) 1136px, 100vw",
    src: cloud ? desktop.cloud : desktop.src,
    ...(cloud ? { loader: cloudLoader(desktop) } : {}),
  }).props;
  const tall = getImageProps({
    ...base,
    alt: mobile.alt,
    sizes: "100vw",
    src: cloud ? mobile.cloud : mobile.src,
    ...(cloud ? { loader: cloudLoader(mobile) } : {}),
  }).props;
  const preview = (b: string | undefined, cls: string) =>
    b ? (
      <div
        aria-hidden
        className={`absolute inset-0 scale-110 bg-cover bg-center blur-2xl ${cls}`}
        style={{ backgroundImage: `url(${b})` }}
      />
    ) : null;

  return (
    <>
      {/* Blurred previews sit behind the photo until it has loaded and covers them. */}
      {preview(PHOTO_BLUR[mobile.name], "sm:hidden")}
      {preview(PHOTO_BLUR[desktop.name], "hidden sm:block")}
      <picture key={cloud ? "cloud" : "local"}>
        <source media="(min-width: 640px)" srcSet={wide.srcSet} sizes={wide.sizes} />
        <img {...tall} ref={imgRef} alt={alt} onError={() => !failed && setFailed(true)} className={`object-cover ${className}`} />
      </picture>
    </>
  );
}
