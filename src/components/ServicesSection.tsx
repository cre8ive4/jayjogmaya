import { motion } from "framer-motion";
import cityTransport from "@/assets/city-transport.webp";
import airportTransport from "@/assets/airport-transport.webp";
import hospitalTransport from "@/assets/hospital-transport.webp";
import weddingCeremony from "@/assets/wedding-ceremony.webp";
import hotelTransport from "@/assets/hotel-transport.webp";
import AnimatedSection from "./AnimatedSection";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const services = [
  {
    id: 1,
    number: "01",
    icon: cityTransport,
    title: "City transfer",
    description: "Kuldevi car rental provider city transfer services in resnable rate.",
  },
  {
    id: 2,
    number: "02",
    icon: airportTransport,
    title: "Airport transfer",
    description: "Jay Jogmaya car rental provider airport transfer services in resnable rate.",
  },
  {
    id: 3,
    number: "03",
    icon: hospitalTransport,
    title: "Hospital transfer",
    description: "Jay Jogmaya car rental provider hospital transfer services in resnable rate.",
  },
  {
    id: 4,
    number: "04",
    icon: weddingCeremony,
    title: "Wedding ceremony",
    description: "Jay Jogmaya car rental provider wedding ceremony services in resnable rate.",
  },
  {
    id: 5,
    number: "05",
    icon: hotelTransport,
    title: "Whole City Tour",
    description: "Jay Jogmaya car rental provider Whole City Tour services in resnable rate.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-services-bg overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="section-heading">
            <h4>see our</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Latest Services</h2>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-0"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                className="service-card bg-card group cursor-pointer h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated number background */}
                <motion.span
                  className="absolute top-4 right-4 text-4xl sm:text-5xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {service.number}
                </motion.span>

                {/* Icon with hover effect */}
                <motion.div
                  className="mb-4 sm:mb-6 relative"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="grayscale w-12 h-12 sm:w-16 sm:h-16 mx-auto relative z-10"
                  />
                </motion.div>

                <motion.h3
                  className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors"
                >
                  {service.title}
                </motion.h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{service.description}</p>

                {/* Hover line animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
