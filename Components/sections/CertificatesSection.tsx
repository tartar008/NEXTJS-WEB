"use client";

import React, { useEffect, useState } from "react";
import CertificateCard from "../ui/CertificateCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { groupedCertificates, Certificate } from "../../data/certificatesData";

const CertificatesSection = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

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
                                <div
                                    key={idx}
                                    onClick={() => setSelectedCert(cert)}
                                    className="cursor-pointer"
                                >
                                    <CertificateCard {...cert} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL POPUP */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
                    {/* background click close */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setSelectedCert(null)}
                    ></div>

                    {/* modal content */}
                    <div className="relative z-10 max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="w-full h-auto object-contain"
                        />
                        <div className="p-4 border-t text-center">
                            <h3 className="text-lg font-semibold mb-1">{selectedCert.title}</h3>
                            <p className="text-sm text-gray-600">{selectedCert.date}</p>
                        </div>
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default CertificatesSection;
