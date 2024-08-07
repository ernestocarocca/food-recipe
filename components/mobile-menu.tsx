// components/Navbar.js
"use client";
import { use, useEffect, useState } from 'react';
import Link from 'next/link';



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
        , [isMobileMenuOpen]);

    return (
        <nav className=" ">
            <div className="container mx-auto  h-[50px]  ">
               
                <div className="hidden md:flex space-x-4">
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/services" className="text-white">Services</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white text-3xl "
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-4">
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/services" className="text-white">Services</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
