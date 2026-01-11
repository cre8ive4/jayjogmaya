import { motion } from "framer-motion";
import toyotaOffer from "@/assets/eartiga2.webp";
import AnimatedSection from "./AnimatedSection";

const PromoSection = () => {
  return (
    <section className="bg-promo-bg py-12 md:py-16 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center px-4 sm:px-0">
          <AnimatedSection direction="left" className="order-2 md:order-1">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={toyotaOffer}
                alt="Toyota Offer"
                className="w-full max-w-sm sm:max-w-md mx-auto md:mx-0 drop-shadow-2xl"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.2}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Do You Want To Earn With Us?{" "}
              <span className="text-primary">So Don't be Late.</span>
            </motion.h3>
            <motion.a
              href="https://api.whatsapp.com/send?phone=8460004588&text=I%20am%20interested%20in%20working%20as%20a%20driver%20with%20Jay%20Jogmaya%20Car%20Rental.
"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Become a driver
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
