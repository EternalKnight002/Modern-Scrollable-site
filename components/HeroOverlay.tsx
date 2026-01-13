"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroOverlay() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="pointer-events-none fixed inset-0 z-30 flex h-screen flex-col items-center justify-center text-center"
        >
            <h1 className="bg-gradient-to-b from-white via-white/80 to-transparent bg-clip-text text-6xl font-black tracking-tighter text-transparent sm:text-8xl md:text-9xl">
                SOUND
                <br />
                REINVENTED
            </h1>
            <p className="mt-6 text-lg tracking-wide text-white/60">
                Experience audio in its purest form.
            </p>
        </motion.div>
    );
}
