'use client'

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { use } from 'react'

interface Post {
  title: string
  content: string
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)  // ดึงค่า slug โดยใช้ React.use() เพื่อ unwrapped
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/blog/${slug}`) // เรียก API ตาม slug
      if (res.ok) {
        const data = await res.json()
        setPost(data)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug]) // ใช้ slug เป็น dependency

  if (!post) return <div>Loading...</div>

  return (
    <article className="prose max-w-3xl mx-auto py-12">
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}
