// /app/Exp/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { experience, ExperienceItem } from '@/data/experience';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

type Props = {
  params: { slug: string };
};

export default function ExpPage({ params }: Props) {
  const exp = experience.find((p: ExperienceItem) => p.slug === params.slug);
  if (!exp) return notFound();

  const formattedDate = exp.date.includes('-')
    ? format(new Date(exp.date + '-01'), 'MMMM yyyy', { locale: th })
    : exp.date; // รองรับกรณีที่เป็น "ปี 2023" ด้วย

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 md:px-6">
      <article className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{exp.title}</h1>

        {formattedDate && (
          <p className="text-sm text-gray-500">{formattedDate}</p>
        )}

        {exp.image && (
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full rounded-lg border border-gray-200 shadow-sm"
          />
        )}

        <div
          className="text-gray-700 leading-relaxed text-lg space-y-4"
          dangerouslySetInnerHTML={{ __html: exp.content }}
        />

        {exp.github && (
          <a
            href={exp.github}
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
