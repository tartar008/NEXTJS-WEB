import React from 'react'
import './About-Me.css';
import Image from "next/image";
import Link from 'next/link';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';

import Image_Profile from '../(assets)/Image_profile.jpg'
import Image_certificate_Accenture from '../(assets)/Certificate/Accenture.jpg'
import Image_certificate_Chatbot from '../(assets)/Certificate/Chatbot.jpg'
import Image_certificate_Innovative from '../(assets)/Certificate/Innovative_Entrepreneurship.jpg'
import Image_certificate_CooperativeEducation from '../(assets)/Certificate/PrepareForCooperativeEducation.jpg'
import Image_certificate_Microsoft_1 from '../(assets)/Certificate/Microsoft Learn [1].jpg'
import Image_certificate_Microsoft_2 from '../(assets)/Certificate/Microsoft Learn [2].jpg'
import Image_certificate_Microsoft_3 from '../(assets)/Certificate/Microsoft Learn [3].jpg'
import Cloud_certificate from '../(assets)/Certificate/Cloud_Certificate_cognitiveclass.jpg'





const page = () => {
    return (
        <>

            {/* Header  */}
            <header className="text-center py-10">
                <h2 className="text-4xl font-bold mb-2">👩‍💻 About Me</h2>
                <p className="text-lg text-gray-600">ฉันคือคนที่รักการเรียนรู้ พัฒนา และสร้างสรรค์สิ่งใหม่ ๆ บนโลกดิจิทัล</p>
            </header>

            {/* Banner Section */}
            <section id="banner" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">

                    {/* Text */}
                    <div className="md:w-7/12 w-full mb-10 md:mb-0">
                        <div className="mb-6">
                            <div>
                                <h2 className="text-3xl font-bold border border-white p-2 mb-5 inline-block shadow-md">Welcome to my Portfolio</h2>
                            </div>
                            <h1 className="text-4xl font-extrabold mb-4 animate-typewriter">Hi! I'm Tar <span className="text-yellow-300 ">Web Developer</span></h1>
                            <p className="text-lg leading-relaxed mb-6">
                                <span className="inline-block w-5 h-2 mr-6 bg-white align-middle rounded-full"></span>
                                ฉันเป็นคนที่รักการเรียนรู้และพัฒนาตนเอง โดยเฉพาะในด้านเทคโนโลยีและการพัฒนาโปรแกรม...
                            </p>
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
                                Connect Me →
                            </button>
                        </div>
                    </div>

                    {/* Profile Image */}
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

            {/* Skills Section */}
            <section className="bg-gray-100 py-16 " data-aos="fade-up" id="skills">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-10">🛠️ My Skills</h2>

                    {/* Category Component  */}
                    <div className="space-y-8">

                        {/* Front-End */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">🎨 Front-End</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="icon" />HTML5</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="icon" />CSS3</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="icon" />Bootstrap</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="icon" />JavaScript</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="icon" />React</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="icon" />Tailwind CSS</span>
                            </div>
                        </div>

                        {/* Back-End */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">🧠 Back-End</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="icon" />Node.js</span>
                                <span className="skill-badge">Express</span>

                            </div>
                        </div>

                        {/* Programming */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">👨‍💻 Programming</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="icon" />Python (Basic)</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="icon" />C</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="icon" />Java</span>
                            </div>
                        </div>

                        {/* Database  */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">💾 Database</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="icon" />MySQL</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="icon" />MongoDB</span>
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">🔧 Tools</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="icon" />GitHub</span>
                                <span className="skill-badge"><img src="https://www.vectorlogo.zone/logos/postman/postman-icon.svg" className="icon" />Postman</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="icon" />Docker</span>
                                <span className="skill-badge"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" className="icon" />Figma</span>
                                <span className="skill-badge"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Arduino_Logo.svg" className="icon" />Arduino IDE</span>
                            </div>
                        </div>

                        {/* Learning  */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">📚 Currently Learning</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" className="icon" />ASP.NET</span>
                                <span className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="icon bg-white rounded" />Next.js</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Projects Section  */}
            <section className="bg-white py-16" data-aos="fade-up" id="projects">
                <div className="container mx-auto px-6 md:px-0 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">✨ My Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        {projects.map(project => (
                            <div key={project.slug} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-3">
                                    {project.description}
                                </p>

                                <Link href={`/Project/${project.slug}`} key={project.slug} className="text-blue-600 hover:underline font-medium">
                                    ดูโปรเจกต์ →
                                </Link>
                            </div>

                        ))}

                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-gray-50 py-20" id="Experience" data-aos="fade-up">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        🧠 ประสบการณ์ของฉัน
                    </h2>

                    <ol className="relative border-s-4 border-blue-200 ml-3">
                        {[...experience]
                            .sort((a, b) => a.date.localeCompare(b.date))
                            .reverse()
                            .map((exp, index) => (
                                <li
                                    key={exp.slug}
                                    className="mb-12 ms-6 relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Bullet */}
                                    <span className="absolute -left-5 top-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md" />

                                    {/* Date */}
                                    <time className="block mb-2 text-sm text-gray-500">
                                        {exp.date.includes('-')
                                            ? new Date(exp.date + '-01').toLocaleDateString('th-TH', {
                                                year: 'numeric',
                                                month: 'long',
                                            })
                                            : exp.date}
                                    </time>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>

                                    {/* Description */}
                                    <p className="text-gray-700 mt-2">{exp.description}</p>

                                    {/* Read More */}
                                    <div className="mt-4">
                                        <a
                                            href={`/Exp/${exp.slug}`}
                                            className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
                                        >
                                            อ่านเพิ่มเติม →
                                        </a>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            </section>


            {/* Timeline / Story   */}
            <section className="bg-gray-100 py-16" data-aos="fade-up" id="timeline">
                <div className="flex flex-col md:flex-row justify-center items-start gap-8 container mx-auto px-6 md:px-0 max-w-6xl">

                    {/* ฝั่งไทม์ไลน์ */}
                    <div className="w-full md:w-2/4">
                        <h2 className="text-2xl font-bold text-center mb-8">📖 Education</h2>
                        <ol className="relative border-l border-blue-300 ml-4">
                            <li className="mb-10 ml-6">
                                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                                <h3 className="font-semibold text-lg text-gray-800">🎓 Prince of Songkla University</h3>
                                <time className="block mb-1 text-sm text-gray-500">2565 - Present</time>
                                <div className="block mb-1 text-sm text-gray-500">GPAX : 3.54</div>
                                <p className="text-gray-700 mb-2">
                                    คณะวิทยาศาสตร์ ภาควิชาวิทยาการคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร
                                </p>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>เรียนรู้การพัฒนาเว็บทั้งด้าน Frontend (React, Tailwind) และ Backend (Node.js, Express)</li>
                                    <li>ทำโปรเจกต์ส่วนตัวและงานกลุ่มที่เกี่ยวข้องกับระบบฐานข้อมูล และ REST API</li>
                                    <li>มีความสนใจพิเศษด้าน DevOps, Microservices และ Software Architecture</li>
                                    <li>เคยเข้าร่วมกิจกรรมแข่งขัน Hackathon และอบรมด้านเทคโนโลยีใหม่ๆ</li>
                                </ul>
                            </li>

                            <li className="mb-10 ml-6">
                                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                                <h3 className="font-semibold text-lg text-gray-800">🏫 Hatyai Ratprachasun School</h3>
                                <time className="block mb-1 text-sm text-gray-500">2562 - 2564</time>
                                <div className="block mb-1 text-sm text-gray-500">GPAX : 3.47</div>
                                <p className="text-gray-700 mb-2">
                                    แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์
                                </p>
                            </li>
                        </ol>
                    </div>


                    {/* คอลัมน์ข้างๆ (ว่างไว้ หรือจะใส่อะไรเพิ่มก็ได้) */}
                    <div className="w-full md:w-2/4">
                        <h2 className="text-2xl font-bold text-center mb-8">📖 My Journey</h2>
                        <ol className="relative border-l border-blue-300 ml-4">
                            <li className="mb-10 ml-6">
                                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                                <h3 className="font-semibold text-lg text-gray-800">🎓 จบการศึกษาจากมหาวิทยาลัย</h3>
                                <time className="block mb-1 text-sm text-gray-500">2018</time>
                                <p className="text-gray-700">เรียนด้านวิทยาการคอมพิวเตอร์ และเริ่มสนใจสายเว็บตั้งแต่ปี 2</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                                <h3 className="font-semibold text-lg text-gray-800">💼 เริ่มทำโปรเจกต์จริง</h3>
                                <time className="block mb-1 text-sm text-gray-500">2019 - ปัจจุบัน</time>
                                <p className="text-gray-700">พัฒนาเว็บแอปหลายรูปแบบ ทั้งด้าน frontend และ backend</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                                <h3 className="font-semibold text-lg text-gray-800">🚀 กำลังพัฒนาทักษะขั้นสูง</h3>
                                <time className="block mb-1 text-sm text-gray-500">2024</time>
                                <p className="text-gray-700">เน้นสถาปัตยกรรมระบบ, DevOps, และ Microservices</p>
                            </li>
                        </ol>
                    </div>

                </div>
            </section>


            {/* Certificates */}
            <section className="bg-white py-16" data-aos="fade-up" id="certificates">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-10">🎓 Certificates</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Accenture}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>

                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Chatbot}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Innovative}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_CooperativeEducation}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Microsoft_1}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Microsoft_2}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Image_certificate_Microsoft_3}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>
                        {/* Cert 1 */}
                        <a href="https://certificate-link.com" target="_blank"
                            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <Image
                                src={Cloud_certificate}
                                alt="Accenture Certificate"
                                className="w-full object-cover"
                                priority
                            />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg">Accenture Certificated</h3>
                                <p className="text-sm text-gray-600">มิถุนายน 2567</p>
                            </div>
                        </a>



                    </div>
                </div>
            </section>

            {/* Download CV  */}
            <section className="bg-white py-12 text-center" data-aos="fade-up" id="cv">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">📄 Download My CV</h2>
                    <p className="text-gray-700 mb-6">ดูประวัติการศึกษา ประสบการณ์ และทักษะในไฟล์เดียว</p>
                    <a href="https://yourdomain.com/files/My-CV.pdf" download
                        className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3"></path>
                        </svg>
                        Download CV
                    </a>
                </div>
            </section>


            {/* Contact Section  */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-6">📬 Contact</h3>
                    <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a></p>
                    <p className="text-lg text-gray-700 mb-2">GitHub: <a href="#" className="text-blue-500 hover:underline">github.com/yourname</a></p>
                    <p className="text-lg text-gray-700">LinkedIn: <a href="#" className="text-blue-500 hover:underline">linkedin.com/in/yourname</a></p>
                </div>
            </section>
        </>
    )
}

export default page