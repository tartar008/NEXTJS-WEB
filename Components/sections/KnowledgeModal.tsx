"use client";

import { BookOpenIcon } from "@heroicons/react/24/solid";

const blogPosts = [
  {
    title: "Cloud Computing Basics",
    description: "Overview of GCP, AWS, and Serverless Functions.",
    tag: "Cloud",
  },
  {
    title: "Clean Code & Maintenance",
    description: "Refactoring, versioning, and tracking bugs effectively.",
    tag: "Maintenance",
  },
  {
    title: "Design like a Pro",
    description: "Learn how to use UML, DFD, and class diagrams.",
    tag: "Design",
  },
  {
    title: "Standards You Should Know",
    description: "Explore ISO 9126, IEEE 830, and more.",
    tag: "Documentation",
  },
];

export default function KnowledgeModal() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📚 Knowledge Hub
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                {post.tag}
              </span>
              <BookOpenIcon className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
