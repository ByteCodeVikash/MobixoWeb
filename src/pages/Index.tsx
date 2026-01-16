import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChoose from "@/components/home/WhyChoose";
import FeaturedPhones from "@/components/home/FeaturedPhones";
import StatsSection from "@/components/home/StatsSection";
import PaymentSection from "@/components/home/PaymentSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <WhyChoose />
        <FeaturedPhones />
        <StatsSection />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
