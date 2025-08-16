"use client";

import { useMemo, useState } from "react";
import { experience, ExperienceItem } from "../../data/experience";
import { format, parseISO, isValid } from "date-fns";
import { th } from "date-fns/locale";

function formatThaiMonthYearFlexible(dateStr: string) {
    // รองรับ "2023-12" หรือ "ปี 2023" หรือข้อความอื่น ๆ
    try {
        let parsed = "";
        if (dateStr?.includes("-")) {
            // "YYYY-MM"
            parsed = `${dateStr}-01`;
        } else {
            const m = dateStr?.match(/ปี\s?(\d{4})/);
            if (m) parsed = `${m[1]}-01-01`;
        }
        if (parsed) {
            const d = parseISO(parsed);
            if (isValid(d)) return format(d, "MMMM yyyy", { locale: th });
        }
    } catch { }
    return dateStr || "";
}

export default function ExperienceSection() {
    // --- Tabs state ---
    const [activeTab, setActiveTab] = useState<"work" | "activity">("work");

    // --- Sort ล่าสุดอยู่บนสุด ---
    const sorted = useMemo(
        () =>
            [...experience]
                .sort((a, b) => (a.date || "").localeCompare(b.date || ""))
                .reverse(),
        []
    );

    // --- Filter ตามแท็บ (ถ้าไม่มี type ให้เป็น activity) ---
    const filteredExp = useMemo(
        () => sorted.filter((e: ExperienceItem & { type?: "work" | "activity" }) => (e.type ?? "activity") === activeTab),
        [sorted, activeTab]
    );

    return (
        <section id="experience" className="bg-gray-50 py-20" data-aos="fade-up">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    🧠 ประสบการณ์ของฉัน
                </h2>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveTab("work")}
                        className={[
                            "px-4 py-2 rounded-full border text-sm font-medium transition",
                            activeTab === "work"
                                ? "bg-blue-600 text-white border-blue-600 shadow"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                        aria-pressed={activeTab === "work"}
                    >
                        <span className="mr-1">💼</span> ประสบการณ์ทำงานจริง
                    </button>
                    <button
                        onClick={() => setActiveTab("activity")}
                        className={[
                            "px-4 py-2 rounded-full border text-sm font-medium transition",
                            activeTab === "activity"
                                ? "bg-blue-600 text-white border-blue-600 shadow"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                        aria-pressed={activeTab === "activity"}
                    >
                        <span className="mr-1">🏅</span> กิจกรรม/ผลงาน
                    </button>
                </div>

                {/* Timeline */}
                <ol className="relative border-s-4 border-blue-200 ml-3">
                    {filteredExp.map((exp, index) => {
                        const formattedDate = formatThaiMonthYearFlexible(exp.date);

                        return (
                            <li
                                key={exp.slug || index}
                                className="mb-12 ms-6 relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Bullet */}
                                <span className="absolute -left-5 top-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md" />

                                {/* Date + Type Badge */}
                                <div className="flex items-center gap-3 mb-2">
                                    <time className="block text-sm text-gray-500">
                                        {formattedDate}
                                    </time>
                                    <span
                                        className={[
                                            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                            ((exp as any).type ?? "activity") === "work"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-amber-100 text-amber-700",
                                        ].join(" ")}
                                    >
                                        {((exp as any).type ?? "activity") === "work"
                                            ? "Work"
                                            : "Activity"}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>

                                {/* Description */}
                                <p className="text-gray-700 mt-2">{exp.description}</p>

                                {/* Read More (ถ้าไม่มี content ให้เป็นสีเทา กดไม่ได้) */}
                                <div className="mt-4">
                                    {exp.content && exp.content.trim() !== "" ? (
                                        <a
                                            href={`/Exp/${exp.slug}`}
                                            className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
                                        >
                                            อ่านเพิ่มเติม →
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-sm font-medium inline-flex items-center cursor-not-allowed">
                                            ยังไม่มีข้อมูล →
                                        </span>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
