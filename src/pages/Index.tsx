import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PromoSection from "@/components/PromoSection";
import CarsSection from "@/components/CarsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallSection from "@/components/CallSection";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Header />
      <Navbar />
      <HeroSlider />
      <BookingForm />
      <AboutSection />
      <ServicesSection />
      <PromoSection />
      <CarsSection />
      <TestimonialsSection />
      <CallSection />
      <Footer />
      <FloatingPhone />
      <BackToTop />
    </div>
  );
};

export default Index;
