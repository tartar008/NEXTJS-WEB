import Link from "next/link";
import fs from "fs";
import path from "path";

type Post = {
    slug: string;
    title: string;
};

export default async function BlogPage() {
    const postsDir = path.join(process.cwd(), "app", "blog", "posts");
    const filenames = fs.readdirSync(postsDir);

    // สร้าง list ของโพสต์จากไฟล์ชื่อ slug
    // เช่น cloud.md -> slug = cloud, title กำหนดเองหรือตัดจากไฟล์ได้
    const posts: Post[] = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        // ในนี้อาจจะอ่านไฟล์หาข้อมูล title จริงๆได้
        // แต่ตอนนี้สมมติชื่อเป็น slug ตรงๆ
        return { slug, title: slug };
    });

    return (
        <main className="max-w-7xl mx-auto p-6 flex gap-8">
            {/* Sidebar */}
            <aside className="w-64 sticky top-10 border p-4 rounded shadow space-y-2">
                <h2 className="text-xl font-semibold mb-4">บทความ</h2>
                <ul className="space-y-1">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-blue-600 hover:underline"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* แนะนำ */}
            <section className="flex-1">
                <h1 className="text-4xl font-bold mb-4">ยินดีต้อนรับสู่บล็อก</h1>
                <p>เลือกบทความจากเมนูด้านซ้ายเพื่ออ่านเนื้อหา</p>
            </section>
        </main>
    );
}
