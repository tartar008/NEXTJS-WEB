import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = await params // ต้องใช้ await ที่นี่เพื่อ unwrapped params

  const filePath = path.join(process.cwd(), 'app' , 'content', `${slug}.md`)

  try {
    const file = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(file)

    return new Response(JSON.stringify({
      title: data.title,
      content,
    }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response('File not found', { status: 404 })
  }
}
