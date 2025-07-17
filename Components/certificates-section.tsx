import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Trophy, Users, Star } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  url: string;
}

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      url: "#"
    },
    {
      id: 2,
      title: "React Professional Certificate",
      issuer: "Meta (Facebook)",
      year: "2022",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      url: "#"
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud Platform", 
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      url: "#"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      number: "50+",
      label: "โปรเจคต์ที่เสร็จสมบูรณ์"
    },
    {
      icon: Users,
      number: "30+", 
      label: "ลูกค้าที่พึงพอใจ"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "คะแนนความพึงพอใจ"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ใบรับรองและความสำเร็จ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ใบรับรองและรางวัลที่แสดงถึงความเชี่ยวชาญและการพัฒนาอย่างต่อเนื่อง
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert) => (
            <Card key={cert.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{cert.year}</span>
                  <a href={cert.url} className="text-primary hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">ความสำเร็จที่โดดเด่น</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.number}</h4>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
