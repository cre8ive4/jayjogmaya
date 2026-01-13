import { Car, Settings, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import ertiga from "@/assets/eartiga2.webp";
import aura from "@/assets/hundai-aura.webp";
import swiftDzire from "@/assets/ms-swift-dzire.webp";
import brezza from "@/assets/Brezza.webp";
import hondaAmaze from "@/assets/Honda-amaze.webp";
import toyotaInnova from "@/assets/toyota-innova.webp";
import tempoTraveller from "@/assets/tempo-traveller.webp";
import AnimatedSection from "./AnimatedSection";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const cars = [
  {
    id: 1,
    name: "MS Ertiga",
    price: "Rs.13.00",
    image: ertiga,
    model: "2025",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "MS%20Ertiga%20Details",
  },
  {
    id: 2,
    name: "MS Swift Dzire",
    price: "Rs.11.00",
    image: swiftDzire,
    model: "2024",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "MS%20Swift%20Dzire%20Details",
  },
  {
    id: 3,
    name: "Hundai Aura",
    price: "Rs.11.00",
    image: aura,
    model: "2024",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "Hundai%20aura%20Details",
  },

  {
    id: 4,
    name: "Maruti Breza",
    price: "Rs.12.00",
    image: brezza,
    model: "2024",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "Maruti%20breza%20Details",
  },
  {
    id: 5,
    name: "Honda Amaze",
    price: "Rs.12.00",
    image: hondaAmaze,
    model: "2023",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "Honda%20Amaze%20Details",
  },
  {
    id: 6,
    name: "Toyota Innova",
    price: "Rs.18.00",
    image: toyotaInnova,
    model: "2024",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "Toyota%20Innova%20Details",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    price: "Rs.30.00",
    image: tempoTraveller,
    model: "2023",
    transmission: "Manuel",
    mileage: "15kmpl",
    whatsappText: "Tempo%20Traveller%20Details",
  },
];

const CarsSection = () => {
  return (
    <section id="cars" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="section-heading">
            <h4>Come with</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Hot offers</h2>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          staggerDelay={0.1}
        >
          {cars.map((car) => (
            <StaggerItem key={car.id}>
              <motion.div
                className="offer-card group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image container with overlay */}
                <div className="overflow-hidden relative">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 sm:h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Price badge */}
                  <motion.div
                    className="absolute top-3 right-3 bg-foreground text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    {car.price}/Km
                  </motion.div>
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  >
                    {car.name}
                  </motion.h3>
                  <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                    {car.price}<span className="text-xs sm:text-sm font-normal text-muted-foreground">/ Km</span>
                  </h4>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {[
                      { icon: Car, text: `Model: ${car.model}` },
                      { icon: Settings, text: car.transmission },
                      { icon: Gauge, text: car.mileage },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex gap-2 sm:gap-3">
                    <motion.a
                      href="tel:8460004588"
                      className="flex-1 btn-primary text-center text-xs sm:text-sm py-2 sm:py-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Rent Car
                    </motion.a>
                    <motion.a
                      href={`https://api.whatsapp.com/send?phone=8460004588&text=Send%20Me%20${car.whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline text-center text-xs sm:text-sm py-2 sm:py-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Details
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CarsSection;
