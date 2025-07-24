import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";   // <-- นำเข้า plugin
import Link from "next/link";
import './page.css'; // สมมติว่ามีไฟล์ CSS สำหรับสไตล์ Markdown

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params }: Props) {

    const { slug } = await params;
    const postsDir = path.join(process.cwd(), "app", "blog", "posts");
    const filePath = path.join(postsDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return <div>บทความไม่พบ</div>;
    }

    const content = fs.readFileSync(filePath, "utf-8");

    return (
        <main className="max-w-3xl mx-auto p-6">
            <Link href="/blog" className="text-blue-600 hover:underline mb-6 block">
                ← กลับไปที่บล็อก
            </Link>
            <article className="prose prose-blue max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </article>
        </main>
    );
}
