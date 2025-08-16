import React from "react"
import Link from "next/link"

type Props = {
    title: string
    description: string
    slug: string
    year?: string
    image?: string
}

const ProjectCard = ({ title, description, slug, year, image }: Props) => (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition min-w-[300px] max-w-[300px] flex-shrink-0">
        <div className="mb-4">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    width={300}
                    height={180}
                    className="rounded-md object-cover w-full h-[180px]"
                />
            ) : (
                <div className="w-full h-[180px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
                    No Image
                </div>
            )}
        </div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {year && <p className="text-sm text-gray-500 mb-1">{year}</p>}
        <p className="text-gray-700 mb-3 text-sm">{description}</p>
        <Link
            href={`/Project/${slug}`}
            className="text-blue-600 hover:underline font-medium text-sm"
        >
            ดูโปรเจกต์ →
        </Link>
    </div>
)

export default ProjectCard
