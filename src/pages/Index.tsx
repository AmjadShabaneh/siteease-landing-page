import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/Pricing";

const Index = () => {
  return (
    <main className="min-h-screen" dir="rtl">
      <Header />
      <Hero />
      <Features />
      <PricingPlans/>
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
