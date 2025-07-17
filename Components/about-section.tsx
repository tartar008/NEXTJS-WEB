import { CheckCircle, Download } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Frontend Development (React, Next.js, Vue.js)",
    "Backend Development (Node.js, Express, FastAPI)",
    "Database Design (PostgreSQL, MongoDB)",
    "DevOps & Cloud Services (AWS, Docker)"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">เกี่ยวกับผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ผมเป็นนักพัฒนาเว็บที่มีประสบการณ์ในการสร้างแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ความเชี่ยวชาญและประสบการณ์</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ผมมีประสบการณ์กว่า 3 ปีในการพัฒนาเว็บแอปพลิเคชัน ตั้งแต่ Frontend ไปจนถึง Backend 
              ด้วยเทคโนโลยีที่ทันสมัย เช่น React, Next.js, Node.js และ TypeScript
            </p>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="text-primary font-medium hover:text-blue-600 transition-colors duration-200 flex items-center">
                ดาวน์โหลด CV <Download className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
