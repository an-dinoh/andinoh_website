"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Waitlist() {
  const router = useRouter();

  useEffect(() => {
    router.push("/#waitlist");
  }, [router]);

  return null;
}
