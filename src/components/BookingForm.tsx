import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fromAddress: "",
    toAddress: "",
    mobile: "",
    journeyDate: "",
    journeyTime: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi, I want to book a car.%0A
Email: ${encodeURIComponent(formData.email)}%0A
From: ${encodeURIComponent(formData.fromAddress)}%0A
To: ${encodeURIComponent(formData.toAddress)}%0A
Mobile: ${encodeURIComponent(formData.mobile)}%0A
Date: ${encodeURIComponent(formData.journeyDate)}%0A
Time: ${encodeURIComponent(formData.journeyTime)}`;

    window.open(
      `https://api.whatsapp.com/send?phone=918460004588&text=${message}`,
      "_blank"
    );
  };

  const inputClass = (name: string) => `
    w-full px-4 border-2 rounded-lg bg-background text-foreground
    transition-all duration-300 focus:outline-none
    ${
      focusedField === name
        ? "border-primary shadow-lg shadow-primary/20"
        : "border-border"
    }
  `;

  // Floating label logic for mobile
  const mobileFloatingLabel = (value: string, focused: boolean) =>
    value || focused
      ? "top-1 text-[11px] text-primary bg-background px-1"
      : "top-1/2 -translate-y-1/2 text-gray-400";

  // Push text down when label is floating (fixes overlap)
  const mobileInputPadding = (value: string, focused: boolean) =>
    value || focused ? "pt-6 pb-2" : "py-3";

  return (
    <section className="bg-background py-0 mt-8 sm:mt-12 md:mt-16 relative z-10 px-4">
      <AnimatedSection>
        <div className="container-custom">
          <motion.div
            className="bg-card rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 border-2 border-border"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center lg:text-left">
                  Search Your Best Cars here.
                </h3>
              </motion.div>

              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit}>
                  {/* Top Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass("email")} py-3`}
                      required
                    />

                    <input
                      type="text"
                      name="fromAddress"
                      placeholder="From Address"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("fromAddress")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass("fromAddress")} py-3`}
                      required
                    />

                    <input
                      type="text"
                      name="toAddress"
                      placeholder="To Address"
                      value={formData.toAddress}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("toAddress")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass("toAddress")} py-3`}
                      required
                    />
                  </div>

                  {/* Bottom Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No."
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass("mobile")} py-3`}
                      required
                    />

                    {/* Journey Date */}
                    <div className="relative">
                      <input
                        type="date"
                        name="journeyDate"
                        value={formData.journeyDate}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("journeyDate")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClass(
                          "journeyDate"
                        )} sm:py-3 ${mobileInputPadding(
                          formData.journeyDate,
                          focusedField === "journeyDate"
                        )}`}
                        required
                      />
                      <label
                        className={`absolute left-4 transition-all pointer-events-none sm:hidden
                          ${mobileFloatingLabel(
                            formData.journeyDate,
                            focusedField === "journeyDate"
                          )}
                        `}
                      >
                        Journey Date
                      </label>
                    </div>

                    {/* Journey Time */}
                    <div className="relative">
                      <input
                        type="time"
                        name="journeyTime"
                        value={formData.journeyTime}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("journeyTime")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClass(
                          "journeyTime"
                        )} sm:py-3 ${mobileInputPadding(
                          formData.journeyTime,
                          focusedField === "journeyTime"
                        )}`}
                        required
                      />
                      <label
                        className={`absolute left-4 transition-all pointer-events-none sm:hidden
                          ${mobileFloatingLabel(
                            formData.journeyTime,
                            focusedField === "journeyTime"
                          )}
                        `}
                      >
                        Journey Time
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-outline w-full font-semibold text-sm sm:text-base py-3"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px -10px rgba(255, 102, 0, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      CALL BACK
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BookingForm;
