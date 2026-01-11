import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingPhone = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=8460004588&text=Hello%20Jay%20Jogmaya%20Car%20Rental"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg z-50"
      aria-label="Call us"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 40px -10px rgba(34, 197, 94, 0.5)",
      }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Ripple effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.8, 1.8],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.3,
        }}
      />
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
    </motion.a>
  );
};

export default FloatingPhone;
