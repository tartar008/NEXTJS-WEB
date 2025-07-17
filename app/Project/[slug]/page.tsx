// /app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects'; // ปรับ path ตามจริง

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 md:px-6">
      <article className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{project.title}</h1>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg border border-gray-200 shadow-sm"
          />
        )}

        <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            🔗 ดูโค้ดบน GitHub
          </a>
        )}
      </article>
    </div>
  );
}
