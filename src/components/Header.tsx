import { Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/jay-jogmaya-logo.webp";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-background py-3 md:py-4 shadow-md"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={logo}
              alt="Jay Jogmaya Car Rental"
              className="h-12 sm:h-14 md:h-20 w-auto"
            />
          </motion.div>

          {/* Info */}
          <div className="flex flex-wrap justify-center md:flex-nowrap items-center gap-4 md:gap-8">
            {/* Location */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Gujarat, India
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  NH-8 Lalpar, Morbi
                  <br />
                  363642
                </p>
              </div>
            </motion.div>

            {/* 24x7 */}
            <motion.div
              className="hidden md:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">24 × 7</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Service Available
                </p>
              </div>
            </motion.div>

            {/* Live Clock */}
            <motion.div
              className="flex items-center gap-3 px-4 py-2 rounded-lg border border-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Clock className="w-5 h-5 text-primary animate-pulse" />
              <div className="text-center">
                <p className="font-bold text-primary text-sm sm:text-base">
                  {formattedTime}
                </p>
                <p className="text-xs text-muted-foreground">{formattedDate}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
