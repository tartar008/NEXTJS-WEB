"use client";

export default function TimelineSection() {
    return (
        <section className="bg-gray-100 py-16" data-aos="fade-up" id="timeline">
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 container mx-auto px-6 md:px-0 max-w-6xl">

                {/* Education */}
                <div className="w-full md:w-2/4">
                    <h2 className="text-2xl font-bold text-center mb-8">📖 Education</h2>
                    <ol className="relative border-l border-blue-300 ml-4">
                        <li className="mb-10 ml-6">
                            <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                            <h3 className="font-semibold text-lg text-gray-800">🎓 Prince of Songkla University</h3>
                            <time className="block mb-1 text-sm text-gray-500">2565 - ปัจจุบัน</time>
                            <div className="text-sm text-gray-500 mb-1">GPAX : 3.54</div>
                            <p className="text-gray-700 mb-2">
                                คณะวิทยาศาสตร์ ภาควิชาวิทยาการคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>พัฒนาเว็บด้วย React, Tailwind, Node.js</li>
                                <li>ทำโปรเจกต์จริงเกี่ยวกับฐานข้อมูลและ REST API</li>
                                <li>สนใจด้าน DevOps, Microservices และ Software Architecture</li>
                                <li>เข้าร่วม Hackathon และอบรมเทคโนโลยีใหม่ๆ</li>
                            </ul>
                        </li>

                        <li className="mb-10 ml-6">
                            <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                            <h3 className="font-semibold text-lg text-gray-800">🏫 Hatyai Ratprachasun School</h3>
                            <time className="block mb-1 text-sm text-gray-500">2562 - 2564</time>
                            <div className="text-sm text-gray-500 mb-1">GPAX : 3.47</div>
                            <p className="text-gray-700">แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์</p>
                        </li>
                    </ol>
                </div>

                {/* Journey */}
                <div className="w-full md:w-2/4">
                    <h2 className="text-2xl font-bold text-center mb-8">📖 My Journey</h2>
                    <ol className="relative border-l border-blue-300 ml-4">
                        <li className="mb-10 ml-6">
                            <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                            <h3 className="font-semibold text-lg text-gray-800">🎓 เริ่มต้นสนใจสายเว็บ</h3>
                            <time className="block mb-1 text-sm text-gray-500">2018</time>
                            <p className="text-gray-700">เรียนวิทยาการคอมพิวเตอร์ และเริ่มทำเว็บตั้งแต่ปี 2</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                            <h3 className="font-semibold text-lg text-gray-800">💼 ทำโปรเจกต์จริง</h3>
                            <time className="block mb-1 text-sm text-gray-500">2019 - ปัจจุบัน</time>
                            <p className="text-gray-700">พัฒนาเว็บแอปทั้ง frontend/backend หลากหลาย</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></span>
                            <h3 className="font-semibold text-lg text-gray-800">🚀 พัฒนาทักษะขั้นสูง</h3>
                            <time className="block mb-1 text-sm text-gray-500">2024</time>
                            <p className="text-gray-700">โฟกัส DevOps, Software Architecture และ Microservices</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
