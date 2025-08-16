"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold text-indigo-600 drop-shadow-md mb-6"
                >
                    ✨ คติประจำใจ ✨
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-800 font-medium max-w-xl mx-auto"
                >
                    <span className="inline-block border-b-4 border-indigo-400 pb-1 px-2">
                        ถ้าไม่ลอง ก็อยู่ที่เดิม , ถ้าไม่ลอง ก็ไม่เปลี่ยนแปลง
                    </span>
                </motion.p>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute w-32 h-32 bg-indigo-100 rounded-full opacity-30 top-10 left-10 animate-pulse-slow blur-3xl" />
                <div className="absolute w-48 h-48 bg-purple-100 rounded-full opacity-20 top-64 right-20 animate-pulse-slow blur-2xl" />
                <div className="absolute w-24 h-24 bg-pink-100 rounded-full opacity-30 bottom-20 left-1/3 animate-pulse-slow blur-2xl" />
            </div>
        </section>
    );
}
