"use client";

import Link from "next/link";
import KnowledgeModal from "@/components/sections/KnowledgeModal";

export default function Navigation() {
    return (
        <nav className="py-4 px-8 shadow-md sticky top-0 bg-white z-50">
            <ul className="flex items-center justify-center space-x-6">
                <li>
                    <Link
                        href="/#hero"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#about"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#portfolio"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Project
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#skills"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#certificates"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Certificates
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#contact"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Contact
                    </Link>
                </li>

                {/* ปุ่ม My Knowledge เด่นหน่อย */}
                <li>
                    {/* <KnowledgeModal /> */}
                </li>

                {/* เพิ่ม Blog */}
                <li>
                    <Link
                        href="/blog"
                        className="px-3 py-1 rounded bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition"
                    >
                        Knowledge Hub
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
