export default function ExperienceSection() {
    return (
        <section id="experience" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
            <ul className="space-y-4">
                <li>
                    <h3 className="font-semibold">Frontend Developer at ABC Corp</h3>
                    <p className="text-sm text-gray-600">2023 - Present</p>
                    <p>Developed responsive web apps using React and Tailwind CSS.</p>
                </li>
                <li>
                    <h3 className="font-semibold">Intern at XYZ Co.</h3>
                    <p className="text-sm text-gray-600">2022</p>
                    <p>Assisted with UI implementation and bug fixes.</p>
                </li>
            </ul>
        </section>
    );
}
