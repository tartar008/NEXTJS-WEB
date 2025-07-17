// /app/Exp/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { experience } from '@/data/experience'; // ปรับ path ตามจริง

type Props = {
  params: { slug: string };
};

export default function ExpPage({ params }: Props) {
  const Exp = experience.find(p => p.slug === params.slug);
  if (!Exp) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 md:px-6">
      <article className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{Exp.title}</h1>

        {Exp.image && (
          <img
            src={Exp.image}
            alt={Exp.title}
            className="w-full rounded-lg border border-gray-200 shadow-sm"
          />
        )}

        <p className="text-gray-700 leading-relaxed text-lg">{Exp.content}</p>

        {Exp.github && (
          <a
            href={Exp.github}
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
