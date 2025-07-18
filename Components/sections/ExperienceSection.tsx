import { experience, ExperienceItem } from "@/data/experience";
import { format, parseISO, isValid } from "date-fns";
import { th } from "date-fns/locale";

export default function ExperienceSection() {
    return (
        <section id="experience" className="bg-gray-50 py-20" data-aos="fade-up">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🧠 ประสบการณ์ของฉัน</h2>

                <ol className="relative border-s-4 border-blue-200 ml-3">
                    {[...experience]
                        .sort((a, b) => a.date.localeCompare(b.date))
                        .reverse()
                        .map((exp: ExperienceItem, index) => {
                            // ✅ แก้ตรงนี้: รองรับทั้ง "ปี 2023" และ "2023-12"
                            let formattedDate = exp.date;

                            try {
                                let parsedDateStr = "";

                                if (exp.date.includes("-")) {
                                    // กรณี "2023-12"
                                    parsedDateStr = exp.date + "-01";
                                } else if (/ปี\s?(\d{4})/.test(exp.date)) {
                                    // กรณี "ปี 2023"
                                    const match = exp.date.match(/ปี\s?(\d{4})/);
                                    if (match) {
                                        parsedDateStr = `${match[1]}-01-01`;
                                    }
                                }

                                const dateObj = parsedDateStr ? parseISO(parsedDateStr) : null;

                                if (dateObj && isValid(dateObj)) {
                                    formattedDate = format(dateObj, "MMMM yyyy", { locale: th });
                                }
                            } catch (err) {
                                console.warn("Invalid date:", exp.date);
                            }

                            return (
                                <li
                                    key={exp.slug || index}
                                    className="mb-12 ms-6 relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <span className="absolute -left-5 top-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md" />

                                    <time className="block mb-2 text-sm text-gray-500">{formattedDate}</time>

                                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>

                                    <p className="text-gray-700 mt-2">{exp.description}</p>

                                    {exp.link && (
                                        <div className="mt-4">
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
                                            >
                                                อ่านเพิ่มเติม →
                                            </a>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                </ol>
            </div>
        </section>
    );
}
