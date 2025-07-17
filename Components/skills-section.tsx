import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      progress: 92,
      description: "React, Vue.js, Next.js",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Backend", 
      icon: "⚙️",
      progress: 85,
      description: "Node.js, Python, Express",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Database",
      icon: "🗄️", 
      progress: 78,
      description: "PostgreSQL, MongoDB",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "DevOps",
      icon: "☁️",
      progress: 70,
      description: "AWS, Docker, CI/CD", 
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ทักษะและความเชี่ยวชาญ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เทคโนโลยีและเครื่องมือที่ผมมีความเชี่ยวชาญและใช้ในการพัฒนาโปรเจคต์
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <div className="space-y-2">
                <Progress value={skill.progress} className="h-2" />
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">เทคโนโลยีที่ใช้</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 rounded-full font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
