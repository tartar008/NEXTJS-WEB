import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              สวัสดี! ผม
              <span className="text-primary"> Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full-Stack Developer ที่มีความหลงใหลในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานได้จริง 
              ด้วยประสบการณ์ในการพัฒนาโปรเจคต์ที่หลากหลาย
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                ดูผลงาน
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
              >
                ติดต่อ
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional developer workspace" 
                className="rounded-2xl shadow-2xl w-full max-w-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
