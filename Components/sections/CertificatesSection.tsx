"use client";

import React, { useEffect } from "react";
import CertificateCard from "../ui/CertificateCard";

import AOS from "aos";
import "aos/dist/aos.css";

const CertificatesSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    // ใช้ path รูปแบบ string ที่ชี้ไปยัง public folder เลย
    const certificates = [
        { image: "/assets/Certificate/Accenture_Certified.jpg", title: "Accenture Certified", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Chatbot.jpg", title: "AI Chatbot", date: "พฤษภาคม 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Innovative_Entrepreneurship.jpg", title: "Innovative Developer", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/PrepareForCooperativeEducation.jpg", title: "Cooperative Education", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Microsoft_1.jpg", title: "Microsoft Certificate 1", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Microsoft_2.jpg", title: "Microsoft Certificate 2", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Microsoft_3.jpg", title: "Microsoft Certificate 3", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: "/assets/Certificate/Cloud_Certificate_cognitiveclass.jpg", title: "Cloud Computing Certificate", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
    ];

    return (
        <section className="bg-white py-16" data-aos="fade-up" id="certificates">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-10">🎓 Certificates</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {certificates.map((cert, idx) => (
                        <CertificateCard key={idx} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
