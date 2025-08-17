import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "แพลตฟอร์มการค้าออนไลน์ที่สมบูรณ์แบบ พร้อมระบบการชำระเงินและการจัดการสินค้า",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "แอปพลิเคชันจัดการงานแบบเรียลไทม์ พร้อมฟีเจอร์การทำงานร่วมกันในทีม",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Next.js", "TypeScript", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "แอปพลิเคชันธนาคารมือถือที่ปลอดภัย พร้อมระบบยืนยันตัวตนแบบ 2FA",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React Native", "Firebase", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "แดชบอร์ดวิเคราะห์ข้อมูลแบบเรียลไทม์ พร้อมกราฟและรายงานที่ครอบคลุม",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Vue.js", "D3.js", "Python"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "แพลตฟอร์มโซเชียลมีเดียที่มีฟีเจอร์ครบครัน พร้อมระบบแชทและการแชร์เนื้อหา",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "GraphQL", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "เครื่องมือสร้างเนื้อหาด้วย AI ที่ช่วยในการเขียนบทความและสร้างภาพ",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Next.js", "OpenAI API", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      MongoDB: "bg-emerald-100 text-emerald-800",
      "Next.js": "bg-black text-white",
      TypeScript: "bg-sky-100 text-sky-800",
      "Socket.io": "bg-red-100 text-red-800",
      "React Native": "bg-cyan-100 text-cyan-800",
      Firebase: "bg-orange-100 text-orange-800",
      AWS: "bg-indigo-100 text-indigo-800",
      "Vue.js": "bg-green-100 text-green-800",
      "D3.js": "bg-amber-100 text-amber-800",
      Python: "bg-slate-100 text-slate-800",
      GraphQL: "bg-fuchsia-100 text-fuchsia-800",
      PostgreSQL: "bg-blue-100 text-blue-800",
      "OpenAI API": "bg-lime-100 text-lime-800",
      Tailwind: "bg-teal-100 text-teal-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-muted-foreground bg-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Portfolio
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            ผลงานของผม
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            โปรเจคต์ที่ผมภูมิใจและแสดงให้เห็นถึงความสามารถในการพัฒนา
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className={`border-0 ${getTechColor(
                        tech
                      )} shadow-sm`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground transition hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
