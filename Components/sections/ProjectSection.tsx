"use client";

import React from "react";
import Link from "next/link";

const projects = [
    {
        slug: "ai-resume-builder",
        title: "AI Resume Builder",
        description: "เว็บแอปพลิเคชันที่ช่วยสร้างเรซูเม่ด้วย AI ในไม่กี่คลิก",
    },
    {
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        description: "แดชบอร์ดแสดงข้อมูลสภาพอากาศเรียลไทม์พร้อมกราฟและแผนที่",
    },
    // เพิ่มโปรเจกต์เพิ่มเติมตามต้องการ
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-white py-16" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-0 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8">✨ My Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-3">{project.description}</p>

                            <Link
                                href={`/Project/${project.slug}`}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                ดูโปรเจกต์ →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
