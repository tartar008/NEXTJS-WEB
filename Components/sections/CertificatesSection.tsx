"use client";

import React, { useEffect } from "react";
import CertificateCard from "../ui/CertificateCard";
import AOS from "aos";
import "aos/dist/aos.css";

const CertificatesSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const groupedCertificates = {
        "Microsoft Certificates": [
            {
                image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_1.jpg",
                title: "Microsoft Certificate: HTML/CSS/JS",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_2.jpg",
                title: "Microsoft Certificate: Azure Fundamentals",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Microsotf/Microsoft_3.jpg",
                title: "Microsoft Certificate: Power BI",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            }
        ],
        "Cybersecurity": [
            {
                image: "/NEXTJS-WEB/assets/Certificate/PSU_Cybersecurity.png",
                title: "Cybersecurity Workshop (PSU)",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/PSU_Cybersecurity_2.jpg",
                title: "Cybersecurity Awareness (PSU)",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            }
        ],
        "AI & Cloud": [
            {
                image: "/NEXTJS-WEB/assets/Certificate/Chatbot.jpg",
                title: "AI Chatbot Workshop",
                date: "พฤษภาคม 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Certificate_HuggingFace_LLM_Course.webp",
                title: "Hugging Face LLM Course",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Cloud_Certificate_cognitiveclass.jpg",
                title: "Cloud Computing - Cognitive Class",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            }
        ],
        "Other Certificates": [
            {
                image: "/NEXTJS-WEB/assets/Certificate/Accenture_Certified.jpg",
                title: "Accenture Certified",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Innovative_Entrepreneurship.jpg",
                title: "Innovative Entrepreneurship",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/PrepareForCooperativeEducation.jpg",
                title: "Preparation for Cooperative Education",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            },
            {
                image: "/NEXTJS-WEB/assets/Certificate/Certificate_Internship.png",
                title: "Internship Certificate",
                date: "มิถุนายน 2567",
                link: "https://certificate-link.com"
            }
        ]
    };

    return (
        <section className="bg-white py-16" data-aos="fade-up" id="certificates">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-10">🎓 Certificates</h2>

                {/* Render grouped sections */}
                {Object.entries(groupedCertificates).map(([groupTitle, certs], groupIndex) => (
                    <div key={groupIndex} className="mb-14">
                        <h3 className="text-xl font-semibold text-gray-800 mb-5 border-b pb-1">{groupTitle}</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {certs.map((cert, idx) => (
                                <CertificateCard key={idx} {...cert} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificatesSection;
