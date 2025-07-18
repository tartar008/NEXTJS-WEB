"use client";

import React from "react";

const skills = [
    {
        category: "🎨 Front-End",
        items: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        ],
    },
    {
        category: "🧠 Back-End",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "" },
        ],
    },
    {
        category: "👨‍💻 Programming",
        items: [
            { name: "Python (Basic)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        ],
    },
    {
        category: "💾 Database",
        items: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        ],
    },
    {
        category: "🔧 Tools",
        items: [
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/postman/postman-icon.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
            { name: "Arduino IDE", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Arduino_Logo.svg" },
        ],
    },
    {
        category: "📚 Currently Learning",
        items: [
            { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", extraClass: "bg-white rounded" },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-16 bg-gray-100" data-aos="fade-up">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-10">🛠️ My Skills</h2>

                <div className="space-y-8">
                    {skills.map((group, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="skill-badge flex items-center gap-2 px-3 py-2 bg-white rounded shadow text-sm"
                                    >
                                        {item.icon && (
                                            <img
                                                src={item.icon}
                                                className={`icon w-5 h-5 ${item.extraClass || ""}`}
                                                alt={item.name}
                                            />
                                        )}
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
