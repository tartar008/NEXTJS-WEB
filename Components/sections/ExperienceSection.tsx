import { experience } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
            <ul className="space-y-4">
                {experience.map((exp, idx) => (
                    <li key={idx}>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-gray-600">{exp.date}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
