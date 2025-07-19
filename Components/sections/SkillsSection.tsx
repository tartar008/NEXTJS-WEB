"use client";

import React from "react";
import Image from "next/image";

const skills = [
    {
        category: "🎨 Front-End",
        items: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React (CRA & Vite)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", extraClass: "bg-white rounded" },
            { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        ],
    },
    {
        category: "🧠 Back-End",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "C#.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        ],
    },
    {
        category: "💾 Database",
        items: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        ],
    },
    {
        category: "👨‍💻 Programming",
        items: [
            { name: "Python (Basic)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C#.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        ],
    },
    {
        category: "🔧 Tools & DevOps",
        items: [
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/postman/postman-icon.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Jira", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jira_Logo.svg" },
            { name: "Azure DevOps", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Microsoft_Azure_DevOps_Logo.svg" },
            { name: "n8n", icon: "https://n8n.io/images/logo.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        ],
    },
    {
        category: "📚 Currently Learning / Interests",
        items: [
            { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
            { name: "Transformer AI Models", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/Pytorch_logo_icon.svg" }, // ใช้ PyTorch แทนไอคอน AI
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
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={20}
                                                height={20}
                                                className={`icon ${item.extraClass || ""}`}
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
