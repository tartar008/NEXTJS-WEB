"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navigation from "@/Components/navigation";
import HeroSection from "@/Components/hero-section";
import AboutSection from "@/Components/about-section";
import PortfolioSection from "@/Components/portfolio-section";
import SkillsSection from "@/Components/skills-section";
import CertificatesSection from "@/Components/certificates-section";
import ContactSection from "@/Components/contact-section";
import Footer from "@/Components/footer";


export default function Home() {
  // await new Promise((resolve) => setInterval(resolve, 1000));

  useEffect(() => {
    // Animate on scroll functionality
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .animate-fade-in-up, .animate-fade-in, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="step active" id="Home">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-100 to-teal-100 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">“พื้นที่เล็กๆ สำหรับการเติบโตของฉัน”</h2>
            <p className="mb-6 text-lg text-gray-600">Blog | Journal | Projects | About Me</p>
            <div className="space-x-4">
              <Link href="/Blog" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">📖 Blog</Link>
              <Link href="/Projects" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">🧪 Projects</Link>
              <Link href="/About-Me" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">📘 About Me</Link>
            </div>
          </div>
        </section>

        {/* บทความล่าสุด */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-6">📝 บทความล่าสุด</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-bold text-xl mb-2">บทความ A</h4>
              <p className="text-gray-600 mb-2">สรุปเนื้อหาจากหนังสือที่อ่าน...</p>
              <a href="/Blog/a" className="text-blue-600 hover:underline">อ่านต่อ</a>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h4 className="font-bold text-xl mb-2">บทความ B</h4>
              <p className="text-gray-600 mb-2">ไอเดียใหม่ที่ได้จาก podcast...</p>
              <a href="/Blog/b" className="text-blue-600 hover:underline">อ่านต่อ</a>
            </div>
          </div>
        </section>

        {/* โปรเจคเด่น */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-6">🧩 โปรเจคเด่น</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-xl p-4">
                <h4 className="font-bold mb-2">โปรเจค 1</h4>
                <p className="text-sm text-gray-600">เว็บแสดงพอร์ตส่วนตัว + บทความ</p>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <h4 className="font-bold mb-2">โปรเจค 2</h4>
                <p className="text-sm text-gray-600">To-Do แบบ minimalist</p>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <h4 className="font-bold mb-2">โปรเจค 3</h4>
                <p className="text-sm text-gray-600">API สรุปหนังสือที่อ่าน</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
