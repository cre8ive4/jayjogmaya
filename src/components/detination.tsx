import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

// Images
import somnathImg from "@/assets/somnath.avif";
import dwarkaImg from "@/assets/dwarka.jpg";
import ahmedabadImg from "@/assets/Places-To-Explore-In-Ahmedabad.avif";
import diuImg from "@/assets/the-ultimate-tourist-guide-to-diu-island.jpg";
import statueImg from "@/assets/statue-unity.jpg";

const destinations = [
    {
        id: 1,
        name: "Somnath",
        description:
            "Sacred Jyotirlinga temple by the Arabian Sea. Perfect for spiritual trips.",
        image: somnathImg,
    },
    {
        id: 2,
        name: "Dwarka",
        description:
            "Holy city of Lord Krishna with comfortable long-distance cab service.",
        image: dwarkaImg,
    },
    {
        id: 3,
        name: "Ahmedabad",
        description:
            "Heritage city with modern attractions, food, and culture.",
        image: ahmedabadImg,
    },
    {
        id: 4,
        name: "Diu",
        description:
            "Beach destination with Portuguese architecture and peaceful vibes.",
        image: diuImg,
    },
    {
        id: 5,
        name: "Statue of Unity",
        description:
            "World’s tallest statue, ideal for family and group tours.",
        image: statueImg,
    },
];

const Destinationslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % destinations.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % destinations.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + destinations.length) % destinations.length
        );
    };

    return (
        <section className="section-padding bg-background overflow-hidden">
            <div className="container-custom">
                {/* Heading */}
                <AnimatedSection className="text-center mb-12">
                    <div className="section-heading">
                        <h4>Explore Gujarat</h4>
                        <h2 className="text-3xl md:text-4xl">
                            Popular Destinations
                        </h2>
                    </div>
                </AnimatedSection>

                {/* Slider */}
                <div className="relative max-w-5xl mx-auto px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl overflow-hidden shadow-xl bg-foreground"
                        >
                            {/* Image */}
                            <div className="relative h-[420px]">
                                <img
                                    src={destinations[currentIndex].image}
                                    alt={destinations[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <h3 className="text-2xl font-semibold">
                                            {destinations[currentIndex].name}
                                        </h3>
                                    </div>
                                    <p className="max-w-xl text-background/90 mb-4">
                                        {destinations[currentIndex].description}
                                    </p>

                                    <a
                                        href={`https://wa.me/918460004588?text=Hello, I want to book a cab for ${destinations[currentIndex].name}`}
                                        target="_blank"
                                        className="inline-block px-6 py-2 rounded-full bg-primary text-foreground font-medium transition-all duration-300 hover:scale-105"
                                    >
                                        Book Cab on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* LEFT BUTTON */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2
              w-11 h-11 bg-foreground rounded-full flex items-center justify-center
              text-background shadow-lg transition-all hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2
              w-11 h-11 bg-foreground rounded-full flex items-center justify-center
              text-background shadow-lg transition-all hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-6">
                        {destinations.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-primary w-8"
                                    : "bg-muted-foreground/30 w-3"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinationslider;
