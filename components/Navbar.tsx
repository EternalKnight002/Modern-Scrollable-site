"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    PulseAIR
                </Link>

                {/* Desktop Links */}
                <div className="hidden space-x-8 md:flex">
                    {["Overview", "Specs", "Review"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Pre-order Button */}
                <div className="hidden md:block">
                    <Link
                        href="#preorder"
                        className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                    >
                        Pre-order
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute left-0 top-16 w-full bg-black/90 px-6 py-8 backdrop-blur-xl md:hidden"
                >
                    <div className="flex flex-col space-y-6">
                        {["Overview", "Specs", "Review"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-medium text-white/80 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#preorder"
                            className="block w-full rounded-full bg-white py-3 text-center font-bold text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Pre-order
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
