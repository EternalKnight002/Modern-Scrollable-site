"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 40;

export default function EarbudScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Text Opacity Logic
    const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]); // "Precision"
    const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]); // "Titanium"
    const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]); // "Battery"

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const imagePromises: Promise<void>[] = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const paddedIndex = i.toString().padStart(3, "0");
                    img.src = `/tws-pics/ezgif-frame-${paddedIndex}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        resolve();
                    };
                });
                imagePromises.push(promise);
            }

            await Promise.all(imagePromises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        const render = (index: number) => {
            const canvas = canvasRef.current;
            if (!canvas || images.length === 0) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            const imgIndex = Math.round(index) - 1;
            const safeIndex = Math.max(0, Math.min(imgIndex, FRAME_COUNT - 1));
            const img = images[safeIndex];

            if (img) {
                // Calculate aspect ratio to cover (object-fit: cover equivalent)
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                // Clear and draw
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // React to value changes
        const unsubscribe = currentIndex.on("change", (latest) => {
            render(latest);
        });

        // Initial render
        render(currentIndex.get());

        // Handle resize
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                render(currentIndex.get());
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        }
    }, [currentIndex, images, imagesLoaded]);

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />

                {/* Text Overlay 1 */}
                <motion.div style={{ opacity: text1Opacity }} className="absolute left-10 top-1/2 -translate-y-1/2 text-white pointer-events-none z-10">
                    <h2 className="text-4xl font-bold md:text-6xl">Precision Engineering.</h2>
                    <p className="text-xl text-white/70">Every component aligned.</p>
                </motion.div>

                {/* Text Overlay 2 */}
                <motion.div style={{ opacity: text2Opacity }} className="absolute right-10 top-1/2 -translate-y-1/2 text-right text-white pointer-events-none z-10">
                    <h2 className="text-4xl font-bold md:text-6xl">Titanium Drivers.</h2>
                    <p className="text-xl text-white/70">11mm of pure power.</p>
                </motion.div>

                {/* Text Overlay 3 */}
                <motion.div style={{ opacity: text3Opacity }} className="absolute left-0 right-0 top-3/4 text-center text-white pointer-events-none z-10">
                    <h2 className="text-4xl font-bold md:text-6xl">All Day Battery.</h2>
                </motion.div>

                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
        </div>
    );
}
