/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import type { ProjectCategory } from "../../data/projects";

type Props = {
    title: string;
    description: string;
    slug: string;
    year?: string;
    image?: string;
    technologies?: string[];
    status?: "ongoing" | "completed";
    progress?: number;
    category?: ProjectCategory;   // ✅ ใหม่
    client?: string;              // ✅ ใหม่
    isRealProject?: boolean;      // ✅ ใหม่
};

// สีสำหรับ tech
const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
        React: "bg-blue-100 text-blue-800",
        "Node.js": "bg-green-100 text-green-800",
        MongoDB: "bg-emerald-100 text-emerald-800",
        "Next.js": "bg-black text-white",
        TypeScript: "bg-sky-100 text-sky-800",
        "Socket.io": "bg-red-100 text-red-800",
        "React Native": "bg-cyan-100 text-cyan-800",
        Firebase: "bg-orange-100 text-orange-800",
        AWS: "bg-indigo-100 text-indigo-800",
        "Vue.js": "bg-green-100 text-green-800",
        "D3.js": "bg-amber-100 text-amber-800",
        Python: "bg-slate-100 text-slate-800",
        GraphQL: "bg-fuchsia-100 text-fuchsia-800",
        PostgreSQL: "bg-blue-100 text-blue-800",
        "OpenAI API": "bg-lime-100 text-lime-800",
        Tailwind: "bg-teal-100 text-teal-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
};

// ป้าย category (สี + ป้ายไทย)
const categoryColor: Record<ProjectCategory, string> = {
    training: "bg-amber-100 text-amber-800",
    course: "bg-blue-100 text-blue-800",
    thesis: "bg-purple-100 text-purple-800",
    scholarship: "bg-emerald-100 text-emerald-800",
    client: "bg-rose-100 text-rose-800",
    program: "bg-indigo-100 text-indigo-800",
    personal: "bg-slate-100 text-slate-800",
};

const categoryLabel: Record<ProjectCategory, string> = {
    training: "โปรเจคฝึก",
    course: "โปรเจควิชา",
    thesis: "โปรเจคจบ",
    scholarship: "โปรเจคงานทุน",
    client: "โปรเจครับจากบริษัท",
    program: "โปรเจคโครงการ",
    personal: "โปรเจคส่วนตัว",
};


const ProjectCard = ({
    title,
    description,
    slug,
    year,
    image,
    technologies = [],
    status,
    progress,
    category,
    client,
    isRealProject,
}: Props) => {
    const safeProgress =
        typeof progress === "number" ? Math.max(0, Math.min(100, progress)) : null;

    return (
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition w-full">
            {/* รูป + Badge */}
            <div className="mb-4 relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        width={1200}
                        height={675}
                        className="rounded-md object-cover w-full h-[180px]"
                    />
                ) : (
                    <div className="w-full h-[180px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
                        No Image
                    </div>
                )}

                {/* สถานะกำลังดำเนินการ */}
                {status === "ongoing" && (
                    <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 shadow">
                        🚧 กำลังดำเนินการ
                    </span>
                )}

                {/* หมวดหมู่โปรเจกต์ */}
                {category && (
                    <span
                        className={`absolute top-2 right-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium shadow ${categoryColor[category]}`}
                        title={categoryLabel[category]}
                    >
                        {categoryLabel[category]}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-semibold mb-1">{title}</h3>

            {/* ปี + ลูกค้า/จริงไหม */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                {year && <p className="text-sm text-gray-500">{year}</p>}
                {client && (
                    <p className="text-xs text-gray-600">
                        • ลูกค้า: <span className="font-medium">{client}</span>
                    </p>
                )}
                {isRealProject && (
                    <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                        ใช้งานจริง
                    </span>
                )}
            </div>

            <div className="relative mb-3">
                <p
                    className="text-gray-700 text-sm line-clamp-3 pr-2"
                    title={description}
                >
                    {description}
                </p>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
            </div>

            {/* เทคโนโลยี */}
            {technologies.length > 0 && (
                <div className="mb-4 rounded-lg border border-dashed border-gray-200 bg-gray-50/60 p-3">
                    <p className="text-xs font-medium text-gray-600 mb-2">ทำด้วย:</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getTechColor(
                                    tech
                                )}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* แถบความคืบหน้า */}
            {safeProgress !== null && (
                <div className="mb-3">
                    <div
                        className="h-1 w-full bg-gray-200/80 rounded"
                        role="progressbar"
                        aria-valuenow={safeProgress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="ความคืบหน้าของโปรเจกต์"
                        title={`ความคืบหน้า ${safeProgress}%`}
                    >
                        <div
                            className="h-1 bg-amber-500 rounded transition-all"
                            style={{ width: `${safeProgress}%` }}
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">ความคืบหน้า {safeProgress}%</p>
                </div>
            )}

            <Link
                href={`/Project/${slug}`} // ถ้ารูตจริงเป็น /project ให้แก้ตามจริง
                className="text-blue-600 hover:underline font-medium text-sm"
            >
                ดูโปรเจกต์ →
            </Link>
        </div>
    );
};

export default ProjectCard;
