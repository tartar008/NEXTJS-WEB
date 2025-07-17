import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "ส่งข้อความสำเร็จ!",
        description: "ขอบคุณสำหรับข้อความของคุณ ผมจะติดต่อกลับโดยเร็วที่สุด",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "อีเมล",
      value: "developer@example.com"
    },
    {
      icon: Phone,
      title: "โทรศัพท์",
      value: "+66 (0)81-234-5678"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      value: "กรุงเทพมหานคร, ไทย"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", color: "bg-blue-600 hover:bg-blue-700", icon: "💼" },
    { name: "GitHub", url: "#", color: "bg-gray-800 hover:bg-gray-900", icon: "🐙" },
    { name: "Twitter", url: "#", color: "bg-blue-400 hover:bg-blue-500", icon: "🐦" },
    { name: "Instagram", url: "#", color: "bg-pink-600 hover:bg-pink-700", icon: "📷" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ติดต่อผม</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            พร้อมรับงานโปรเจคต์ใหม่และการร่วมงาน หากสนใจสามารถติดต่อได้ทุกช่องทาง
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ข้อมูลติดต่อ</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">ติดตามผมได้ที่</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200 ${social.color}`}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ส่งข้อความถึงผม</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      ชื่อ
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="กรอกชื่อของคุณ"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      อีเมล
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="กรอกอีเมลของคุณ"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                      หัวข้อ
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="หัวข้อของข้อความ"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      ข้อความ
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="เขียนข้อความของคุณที่นี่..."
                      className="w-full"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white hover:bg-blue-600 transition-colors duration-200"
                  >
                    {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
