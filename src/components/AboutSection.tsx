import { Check } from "lucide-react";
import { motion } from "framer-motion";
import aboutCar from "@/assets/ab-ertiga.webp";
import AnimatedSection from "./AnimatedSection";

const features = [
  "We are a trusted name",
  "we deal in have all brands",
  "have a larger stock of vehicles",
  "we are at India wide locations",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="px-4 sm:px-0">
              <div className="section-heading mb-4 sm:mb-6">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  about us
                </motion.h4>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl"
                >
                  Welcome to Jay Jogmaya Car Rental
                </motion.h2>
              </div>
              <motion.p
                className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Jay Jogmaya car rental is a leading business of car rental in morbi, Gujarat(IND).
                we provide Maruti swift Dzire, Maruti Ertiga, Hundai Aura, Maruti Breza, Honda Amaze,
                Toyota Innova, tempo traveller, 12/17/25 sitter Cars.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative px-4 sm:px-0">
              <motion.div
                className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.img
                src={aboutCar}
                alt="Kuldevi Car Rental - Ertiga"
                className="w-full rounded-xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold">15+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
