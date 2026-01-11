import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "@/assets/testimonial.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    text: "Jay Jogmaya Car Rental truly delivers on quality and reliability. The car was comfortable, the pricing was transparent, and customer support was excellent. It made our trip across Gujarat convenient and enjoyable. Would definitely choose their service again.",
    name: "Ram Patel",
    role: "Customer",
    image: testimonial1,
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing experience with Jay Jogmaya Car Rental! The booking process was smooth, the vehicle was clean and well-maintained, and the service was punctual. The team was polite and very supportive throughout the journey.",
    name: "Priyanka Bhimani",
    role: "Customer",
    image: testimonial2,
    rating: 5,
  },
  {
    id: 3,
    text: "Excellent service! The cars were in perfect condition and the staff was very helpful. I would definitely recommend Jay Jogmaya Car Rental to anyone looking for reliable transportation in Gujarat.",
    name: "Rajesh Patel",
    role: "Business Customer",
    image: testimonial1,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-services-bg overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <div className="section-heading">
            <h4>Some Words</h4>
            <h2 className="text-3xl md:text-4xl">Reviews</h2>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="testimonial-card text-center relative"
            >
              {/* Quote */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-6 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted-foreground italic mb-8">
                “{testimonials[currentIndex].text}”
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-primary/30"
                />
                <div className="text-left">
                  <h4 className="font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT BUTTON — FIXED */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2
              w-10 h-10
              bg-foreground rounded-full
              flex items-center justify-center
              text-background shadow-lg
              transition-all duration-300
              transform-gpu
              hover:scale-110
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT BUTTON — FIXED */}
          <button
            onClick={nextSlide}
            className="
              absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2
              w-10 h-10
              bg-foreground rounded-full
              flex items-center justify-center
              text-background shadow-lg
              transition-all duration-300
              transform-gpu
              hover:scale-110
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
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

export default TestimonialsSection;
