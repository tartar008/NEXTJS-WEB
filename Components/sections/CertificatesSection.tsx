"use client";

import React, { useEffect } from "react";
import CertificateCard from "../ui/CertificateCard";

import Image1 from '@/app/(assets)/Certificate/Accenture.jpg';
import Image2 from '@/app/(assets)/Certificate/Chatbot.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

const CertificatesSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const certificates = [
        { image: Image1, title: "Accenture Certified", date: "มิถุนายน 2567", link: "#" },
        { image: Image2, title: "AI Chatbot", date: "พฤษภาคม 2567", link: "#" },
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
