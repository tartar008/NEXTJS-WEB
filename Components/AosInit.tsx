// components/AosInit.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // ความเร็วของ animation
            once: true,     // ให้ animate แค่ครั้งเดียว
        });
    }, []);

    return null;
}
