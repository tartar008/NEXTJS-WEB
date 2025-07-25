"use client";

import React, { useEffect } from "react";

const BannerSection = () => {
    useEffect(() => {
        // dynamic import AOS ใน useEffect เพื่อโหลดเฉพาะฝั่ง client
        import("aos").then(AOS => {
            AOS.init({ once: true });
        });
        import("aos/dist/aos.css");
    }, []);

    return (
        <section
            id="banner"
            className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            data-aos="fade-up"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
                <div className="md:w-7/12 w-full mb-10 md:mb-0">
                    <h2 className="text-3xl font-bold border border-white p-2 mb-5 inline-block shadow-md">Welcome to my Portfolio</h2>
                    <h1 className="text-4xl font-extrabold mb-4 animate-typewriter">Hi! I&apos;m Tar <span className="text-yellow-300">Web Developer</span></h1>
                    <p className="text-lg leading-relaxed mb-6">
                        <span className="inline-block w-5 h-2 mr-6 bg-white align-middle rounded-full"></span>
                        ฉันเป็นคนที่รักการเรียนรู้และพัฒนาตนเอง โดยเฉพาะในด้านเทคโนโลยีและการพัฒนาโปรแกรม...
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
                        Connect Me →
                    </button>
                </div>

                <div className="md:w-5/12 w-full flex justify-center">
                    <img
                        src="/NEXTJS-WEB/assets/Image_profile.jpg"
                        alt="Profile"
                        width={320}
                        height={300}
                        className="rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105"
                        data-aos="zoom-in"
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
