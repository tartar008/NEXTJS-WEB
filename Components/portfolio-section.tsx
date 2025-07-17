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
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "แอปพลิเคชันจัดการงานแบบเรียลไทม์ พร้อมฟีเจอร์การทำงานร่วมกันในทีม",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "TypeScript", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "แอปพลิเคชันธนาคารมือถือที่ปลอดภัย พร้อมระบบยืนยันตัวตนแบบ 2FA",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "แดชบอร์ดวิเคราะห์ข้อมูลแบบเรียลไทม์ พร้อมกราฟและรายงานที่ครอบคลุม",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "D3.js", "Python"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "แพลตฟอร์มโซเชียลมีเดียที่มีฟีเจอร์ครบครัน พร้อมระบบแชทและการแชร์เนื้อหา",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "GraphQL", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "เครื่องมือสร้างเนื้อหาด้วย AI ที่ช่วยในการเขียนบทความและสร้างภาพ",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "OpenAI API", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-purple-100 text-purple-800",
      "Next.js": "bg-black text-white",
      "TypeScript": "bg-yellow-100 text-yellow-800",
      "Socket.io": "bg-red-100 text-red-800",
      "React Native": "bg-cyan-100 text-cyan-800",
      "Firebase": "bg-orange-100 text-orange-800",
      "AWS": "bg-indigo-100 text-indigo-800",
      "Vue.js": "bg-emerald-100 text-emerald-800",
      "D3.js": "bg-amber-100 text-amber-800",
      "Python": "bg-slate-100 text-slate-800",
      "GraphQL": "bg-violet-100 text-violet-800",
      "PostgreSQL": "bg-blue-100 text-blue-800",
      "OpenAI API": "bg-lime-100 text-lime-800",
      "Tailwind": "bg-sky-100 text-sky-800"
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ผลงานของผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            โปรเจคต์ที่ผมภูมิใจและแสดงให้เห็นถึงความสามารถในการพัฒนา
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className={`text-xs font-medium px-2.5 py-0.5 rounded ${getTechColor(tech)}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.githubUrl} className="text-primary hover:text-blue-600 transition-colors duration-200">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={project.liveUrl} className="text-primary hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink className="h-5 w-5" />
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
