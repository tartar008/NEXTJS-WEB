import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">MyHome</h1>
                    <nav className="space-x-4 text-gray-700">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/About" className="hover:underline">About</Link>
                        <Link href="/Blog" className="hover:underline">Blog</Link>
                        <Link href="/Projects" className="hover:underline">Projects</Link>
                        <Link href="/Login" className="hover:underline">Login</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar