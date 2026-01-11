import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CallSection = () => {
  return (
    <section id="contact" className="bg-call-bg section-padding overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 sm:w-80 h-48 sm:h-80 bg-white/5 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto px-4 sm:px-0">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            With Over <motion.span 
              className=" text-primary bg-white px-2 py-1 rounded-md"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >15+</motion.span> Partners Locations
          </motion.h2>
          <motion.p 
            className="text-background/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our cars have all-India permits. Just remember to pay state tolls and entry taxes. 
            24x7 Roadside Assistance. We have round-the-clock, pan India partners
          </motion.p>
          
          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: MapPin, text: "All India Permit" },
              { icon: Clock, text: "24x7 Service" },
              { icon: Phone, text: "Roadside Assistance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-background text-xs sm:text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <item.icon className="w-4 h-4" />
                {item.text}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="inline-flex items-center gap-3 sm:gap-4 bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 hsl(43 35% 55% / 0.4)",
                  "0 0 0 20px hsl(43 35% 55% / 0)",
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </motion.div>
            <div className="text-left">
              <p className="text-xs sm:text-sm text-muted-foreground">need any help?</p>
              <motion.a 
                href="tel:+918460004588" 
                className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                (+91) 84600 04588
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallSection;
