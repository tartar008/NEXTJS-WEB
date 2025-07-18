"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="py-4 px-8 shadow-md sticky top-0 bg-white z-50">
            <ul className="flex space-x-6 justify-center">
                <li><Link href="#hero">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#certificates">Certificates</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
