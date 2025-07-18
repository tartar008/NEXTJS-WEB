// components/ui/ProjectCard.tsx
import React from "react"
import Link from "next/link"

type Props = {
    title: string
    description: string
    slug: string
}

const ProjectCard = ({ title, description, slug }: Props) => (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <Link
            href={`/Project/${slug}`}
            className="text-blue-600 hover:underline font-medium"
        >
            ดูโปรเจกต์ →
        </Link>
    </div>
)

export default ProjectCard