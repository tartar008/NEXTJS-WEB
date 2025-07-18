"use client";

import React, { useEffect } from "react";
import CertificateCard from "../ui/CertificateCard";

import Image1 from '../../app/(assets)/Certificate/Accenture_Certified.jpg';
import Image2 from '../../app/(assets)/Certificate/Chatbot.jpg';
import Image3 from '../../app/(assets)/Certificate/Innovative_Entrepreneurship.jpg';
import Image4 from '../../app/(assets)/Certificate/PrepareForCooperativeEducation.jpg';
import Image5 from '../../app/(assets)/Certificate/Microsoft_1.jpg';
import Image6 from '../../app/(assets)/Certificate/Microsoft_2.jpg';
import Image7 from '../../app/(assets)/Certificate/Microsoft_3.jpg';
import Image8 from '../../app/(assets)/Certificate/Cloud_Certificate_cognitiveclass.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

const CertificatesSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const certificates = [
        { image: Image1, title: "Accenture Certified", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image2, title: "AI Chatbot", date: "พฤษภาคม 2567", link: "https://certificate-link.com" },
        { image: Image3, title: "Innovative Developer", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image4, title: "Cooperative Education", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image5, title: "Microsoft Certificate 1", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image6, title: "Microsoft Certificate 2", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image7, title: "Microsoft Certificate 3", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
        { image: Image8, title: "Cloud Computing Certificate", date: "มิถุนายน 2567", link: "https://certificate-link.com" },
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
