"use client"

import React, { useState } from "react"
import ProjectCard from "../ui/ProjectCard"

const projects = [
    {
        slug: "iot-ultrasonic-sensor",
        title: "IoT Sensor ควบคุมมอเตอร์ด้วย Blynk",
        year: "2023",
        image: "/NEXTJS-WEB/assets/Project/Mini_Project_IoT_200_480.jpeg", // ✅ ตัวอย่างรูป
        description:
            "โปรเจกต์ IoT ที่ใช้เซ็นเซอร์ HC-SR04 วัดระยะทาง และควบคุมเซอร์โวมอเตอร์ผ่านแอป Blynk พร้อมแสดงผลบน OLED และส่งข้อมูลขึ้น ThingSpeak",
    },
    {
        slug: "sql-practice-dashboard",
        title: "SQL Practice Dashboard",
        year: "2023",
        image: "", // ✅ ยังไม่มีรูป (placeholder)
        description:
            "แอปฝึกเขียน SQL พร้อมตัวอย่างและผลลัพธ์แบบโต้ตอบ พัฒนาเพื่อทบทวนคำสั่ง SQL และการจัดการฐานข้อมูลเบื้องต้น",
    },
    {
        slug: "weather-dashboard",
        title: "Weather Dashboard ด้วย WebService",
        year: "2023",
        image: "",
        description:
            "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ โดยดึงข้อมูลจาก OpenWeatherMap API พร้อมแสดงกราฟและแผนที่ประกอบ",
    },
    {
        slug: "Task Management",
        title: "ระบบจัดการและติดตามงาน แอปพลิเคชันที่สามารถเชื่อมต่อกับ Asana API",
        year: "2023",
        image: "/NEXTJS-WEB/assets/Project/WebServiceProjectTaskManagement.png",
        description:
            "ระบบ Task Management ที่พัฒนาขึ้นนี้ถูกออกแบบมาเพื่อเชื่อมต่อกับ Asana API เพื่อให้ผู้ใช้งานสามารถติดตามงานได้ผ่านทางปฏิทิน พร้อมทั้งมีฟังก์ชันเพิ่มเติมสำหรับการสร้าง",
    },
    {
        slug: "flask-store-api",
        title: "Flask Store API",
        year: "2023",
        image: "",
        description:
            "RESTful API สำหรับร้านค้าออนไลน์ สร้างด้วย Flask และ SQLAlchemy มีฟีเจอร์ CRUD สินค้าและจัดการคำสั่งซื้อ",
    },
    {
        slug: "aspnet-webshop",
        title: "ASP.NET Web Shop",
        year: "2023",
        image: "",
        description:
            "ระบบร้านค้าออนไลน์ที่พัฒนาด้วย ASP.NET Web Forms รองรับการแสดงรายการสินค้า ใส่ตะกร้า และสั่งซื้อ",
    },
    {
        slug: "project-checkname-system",
        title: "ระบบเช็คชื่อนักเรียนออนไลน์",
        year: "2024",
        image: "/NEXTJS-WEB/assets/Project/VWVProjectfinal.png",
        description:
            "ระบบเช็คชื่อเข้าห้องเรียนแบบเรียลไทม์ แยกฝั่งครู/นักเรียน พร้อมระบบ QR Code และแสดงสถิติการเข้าเรียน Front-end: React(CRA) , Back-end: NestJS , Datadase: MongoDB ",
    },
    {
        slug: "store-react",
        title: "Store React - เว็บขายสินค้า",
        year: "2024",
        image: "",
        description:
            "เว็บขายสินค้าจำลอง พัฒนาด้วย React และ Tailwind CSS พร้อมระบบเพิ่มสินค้าในตะกร้าและเช็คเอาท์",
    }
]

const ProjectsSection = () => {
    const [page, setPage] = useState(0)
    const itemsPerPage = 3
    const totalPages = Math.ceil(projects.length / itemsPerPage)

    const handlePrev = () => {
        if (page > 0) setPage(page - 1)
    }

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1)
    }

    const displayedProjects = projects.slice(
        page * itemsPerPage,
        (page + 1) * itemsPerPage
    )

    return (
        <section className="py-14 px-4 bg-gray-50" aria-labelledby="projects-heading">
            <div className="max-w-6xl mx-auto">
                <h2
                    id="projects-heading"
                    className="text-4xl font-bold text-center text-gray-800 mb-10"
                >
                    โปรเจกต์ของฉัน
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            year={project.year}
                            image={project.image} // ✅ ส่ง image เข้าไป
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-10">
                    <button
                        onClick={handlePrev}
                        disabled={page === 0}
                        aria-label="หน้าก่อนหน้า"
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-40"
                    >
                        ← ก่อนหน้า
                    </button>

                    <span className="text-gray-700 font-medium text-sm">
                        หน้า {page + 1} / {totalPages}
                    </span>

                    <button
                        onClick={handleNext}
                        disabled={page >= totalPages - 1}
                        aria-label="หน้าถัดไป"
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-40"
                    >
                        ถัดไป →
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
