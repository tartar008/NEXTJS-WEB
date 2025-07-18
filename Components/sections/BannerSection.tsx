// components/sections/BannerSection.tsx
import Image from "next/image";
import React from "react";
import Image_Profile from '@/app/(assets)/Image_profile.jpg';

const BannerSection = () => (
    <section id="banner" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
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
                <Image
                    src={Image_Profile}
                    alt="Profile"
                    className="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105"
                    priority
                />
            </div>
        </div>
    </section>
);

export default BannerSection;