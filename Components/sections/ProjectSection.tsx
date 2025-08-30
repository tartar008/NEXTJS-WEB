/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects, featuredProject } from "../../data/projects";
import type { Project } from "../../data/projects";

const ProjectsSection = () => {
    const [page, setPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showFeaturedModal, setShowFeaturedModal] = useState(false);

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    const displayedProjects = projects.slice(
        page * itemsPerPage,
        (page + 1) * itemsPerPage
    );

    return (
        <section className="py-14 px-4 bg-gray-50" aria-labelledby="projects-heading">
            <div className="max-w-6xl mx-auto">
                {/* 🌟 FEATURED PROJECT */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                        🌟 โปรเจกต์ที่ภูมิใจที่สุด
                    </h2>

                    <div
                        onClick={() => setShowFeaturedModal(true)}
                        className="relative bg-gradient-to-br from-indigo-100 to-white rounded-xl shadow-xl p-6 lg:flex lg:items-center gap-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                        {/* Badge & Progress สำหรับ Featured */}
                        {featuredProject.status === "ongoing" && (
                            <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 shadow">
                                🚧 กำลังดำเนินการ
                            </span>
                        )}

                        <img
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            className="rounded-lg w-full lg:w-1/2 object-cover"
                        />
                        <div className="mt-6 lg:mt-0 lg:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {featuredProject.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{featuredProject.year}</p>
                            <div
                                className="rounded-lg border bg-gray-50 p-4 max-h-[40vh] md:max-h-[55vh] overflow-y-auto whitespace-pre-wrap break-words overscroll-contain"
                                role="region"
                                aria-label="รายละเอียดโปรเจกต์ (เลื่อนเพื่ออ่านต่อ)"
                                tabIndex={0}
                            >
                                {featuredProject.description}
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {featuredProject.technologies.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                {featuredProject.category && (
                                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700">
                                        {featuredProject.category === "program" ? "โปรเจคโครงการ" :
                                            featuredProject.category === "client" ? "โปรเจครับจากบริษัท" :
                                                featuredProject.category === "course" ? "โปรเจควิชา" :
                                                    featuredProject.category === "training" ? "โปรเจคฝึก" :
                                                        featuredProject.category === "thesis" ? "โปรเจคจบ" :
                                                            featuredProject.category === "scholarship" ? "โปรเจคงานทุน" :
                                                                "โปรเจคส่วนตัว"}
                                    </span>
                                )}
                                {featuredProject.client && (
                                    <span className="text-xs text-gray-600">
                                        • ลูกค้า: <b>{featuredProject.client}</b>
                                    </span>
                                )}
                                {featuredProject.isRealProject && (
                                    <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                                        ใช้งานจริง
                                    </span>
                                )}
                            </div>
                            {/* ⬆⬆⬆ จบส่วนที่เพิ่ม ⬆⬆⬆ */}

                            <p className="mt-3 text-sm text-indigo-600 font-medium">
                                คลิกเพื่อดูรายละเอียดเพิ่มเติม →
                            </p>

                            {/* Progress bar */}
                            {typeof featuredProject.progress === "number" && (
                                <div className="mt-4">
                                    <div className="h-1 w-full bg-gray-200/80 rounded">
                                        <div
                                            className="h-1 bg-amber-500 rounded"
                                            style={{
                                                width: `${Math.max(
                                                    0,
                                                    Math.min(100, featuredProject.progress)
                                                )}%`,
                                            }}
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">
                                        ความคืบหน้า {featuredProject.progress}%
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <h2 id="projects-heading" className="text-4xl font-bold text-center text-gray-800 mb-10">
                    โปรเจกต์ของฉัน
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project) => (
                        <div
                            key={project.slug}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer"
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                slug={project.slug}
                                year={project.year}
                                image={project.image}
                                technologies={project.technologies}
                                status={project.status}
                                progress={project.progress}
                                category={project.category}          // ✅ ส่งเพิ่ม
                                client={project.client}              // ✅ ส่งเพิ่ม
                                isRealProject={project.isRealProject}
                            />
                        </div>
                    ))}
                </div>

                {/* 🌟 FEATURED PROJECT MODAL */}
                {showFeaturedModal && (
                    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
                        <div className="absolute inset-0" onClick={() => setShowFeaturedModal(false)}></div>

                        <div className="relative z-10 max-w-4xl w-full bg-white rounded-xl overflow-auto shadow-xl max-h-[90vh]">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 space-y-4">
                                <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                                <p className="text-sm text-gray-500">{featuredProject.year}</p>

                                <div className="flex flex-wrap gap-2">
                                    {featuredProject.technologies.map((t) => (
                                        <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-gray-700 space-y-4 text-base leading-relaxed">
                                    <p>ระบบดูแลนักเรียนในหอพักที่ออกแบบมาเพื่อให้:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li><strong>นักเรียน:</strong> เช็คชื่อ, ดูพฤติกรรมตนเอง</li>
                                        <li><strong>ผู้ปกครอง:</strong> ตรวจสอบการเข้า-ออกและพฤติกรรม</li>
                                        <li><strong>เจ้าหน้าที่:</strong> บันทึกข้อมูล, ตรวจสอบ</li>
                                        <li><strong>แอดมิน:</strong> จัดการระบบทั้งหมด</li>
                                    </ul>

                                    <p className="font-semibold text-indigo-700 mt-4">🔹 ระบบเช็คชื่อเข้า-ออกหอพัก</p>
                                    <ul className="list-disc ml-6 text-sm">
                                        <li>✅ นักเรียนเช็คชื่อออนไลน์หรืออุปกรณ์</li>
                                        <li>✅ แจ้งเตือนหากขาดเช็คชื่อ</li>
                                    </ul>

                                    <p className="font-semibold text-indigo-700 mt-4">🔹 ระบบบันทึกพฤติกรรม</p>
                                    <ul className="list-disc ml-6 text-sm">
                                        <li>✅ ให้/หักคะแนนพฤติกรรม</li>
                                        <li>✅ แจ้งเตือนผู้ปกครองหากผิดกฎ</li>
                                    </ul>

                                    <p className="font-semibold text-indigo-700 mt-4">🔹 ระบบรายงาน & แจ้งเตือน</p>
                                    <ul className="list-disc ml-6 text-sm">
                                        <li>✅ ผู้ปกครองเข้าดูรายงานประวัติ</li>
                                        <li>✅ แจ้งเตือนแบบ real-time</li>
                                    </ul>

                                    <p className="font-semibold text-indigo-700 mt-4">🔹 ระบบจัดการผู้ใช้ & กฎระเบียบ</p>
                                    <ul className="list-disc ml-6 text-sm">
                                        <li>✅ เพิ่ม/ลบ/แก้ไขนักเรียนได้</li>
                                        <li>✅ ระบบแสดงกฎล่าสุดแบบอัปเดตอัตโนมัติ</li>
                                    </ul>

                                    {/* Progress */}
                                    {typeof featuredProject.progress === "number" && (
                                        <div className="pt-2">
                                            <div className="h-1 w-full bg-gray-200/80 rounded">
                                                <div
                                                    className="h-1 bg-amber-500 rounded"
                                                    style={{
                                                        width: `${Math.max(0, Math.min(100, featuredProject.progress))}%`,
                                                    }}
                                                />
                                            </div>
                                            <p className="mt-1 text-xs text-gray-500">
                                                ความคืบหน้า {featuredProject.progress}%
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={() => setShowFeaturedModal(false)}
                                className="absolute top-2 right-4 text-3xl text-gray-700 hover:text-black font-bold"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

                {/* 👇 NORMAL PROJECT MODAL */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
                        <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>

                        <div className="relative z-10 max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-xl">
                            {selectedProject.image && (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-64 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{selectedProject.year}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((t) => (
                                        <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className="rounded-lg border bg-gray-50 p-3 max-h-[32vh] md:max-h-[45vh] overflow-y-auto whitespace-pre-wrap break-words overscroll-contain text-sm md:text-base leading-relaxed"
                                    role="region"
                                    aria-label="รายละเอียดโปรเจกต์ (เลื่อนเพื่ออ่านต่อ)"
                                    tabIndex={0}
                                >
                                    {selectedProject.description}
                                </div>


                                {selectedProject.status === "ongoing" && typeof selectedProject.progress === "number" && (
                                    <div className="mt-6">
                                        <div className="h-1 w-full bg-gray-200/80 rounded">
                                            <div
                                                className="h-1 bg-amber-500 rounded"
                                                style={{
                                                    width: `${Math.max(0, Math.min(100, selectedProject.progress))}%`,
                                                }}
                                            />
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">
                                            ความคืบหน้า {selectedProject.progress}%
                                        </p>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-2 right-4 text-3xl text-gray-700 hover:text-black font-bold"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

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
    );
};

export default ProjectsSection;
