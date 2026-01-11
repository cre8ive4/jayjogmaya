import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    subtitle: "for rent per day",
    title: "Reserved Now & Get",
    highlight: "10% Off",
    buttonText: "Reserve Now!",
    buttonLink:
      "https://api.whatsapp.com/send?phone=8460004588&text=Ertiga%20Details",
    image:
      "./hero-1.webp",
  },
  {
    id: 2,
    subtitle: "Premium Cars Available",
    title: "Best Cars at",
    highlight: "Best Price",
    buttonText: "Book Now!",
    buttonLink:
      "https://api.whatsapp.com/send?phone=8460004588&text=Booking%20Inquiry",
    image:
      "./hero-2.webp",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('${slides[currentSlide].image}')`,
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left max-w-2xl px-4"
            >
              <p className="text-white text-lg mb-4">
                {slides[currentSlide].subtitle}
              </p>

              <h2 className="text-4xl md:text-6xl text-white font-bold mb-6">
                {slides[currentSlide].title}{" "}
                <span className="text-primary">
                  {slides[currentSlide].highlight}
                </span>
              </h2>

              <a
                href={slides[currentSlide].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                {slides[currentSlide].buttonText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* LEFT BUTTON – NO ANIMATION GLITCH */}
      <button
        onClick={prevSlide}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          w-12 h-12
          bg-primary/80 hover:bg-primary
          rounded-full
          flex items-center justify-center
          text-white
          transition-all duration-300
          transform-gpu
          hover:scale-110
          hover:shadow-[0_0_25px_rgba(255,102,0,0.6)]
        "
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* RIGHT BUTTON – NO ANIMATION GLITCH */}
      <button
        onClick={nextSlide}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          w-12 h-12
          bg-primary/80 hover:bg-primary
          rounded-full
          flex items-center justify-center
          text-white
          transition-all duration-300
          transform-gpu
          hover:scale-110
          hover:shadow-[0_0_25px_rgba(255,102,0,0.6)]
        "
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-primary"
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
