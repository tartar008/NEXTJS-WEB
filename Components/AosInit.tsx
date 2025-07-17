// Components/AosInit.tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true, // animations run only once
      duration: 800,
      offset: 100,
    });
  }, []);

  return null;
}
