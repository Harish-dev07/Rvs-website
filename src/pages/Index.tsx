import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RolesSection from "@/components/RolesSection";
import WhatsNextSection from "@/components/WhatsNextSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import BlogsSection from "@/components/BlogsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  return (
    <>
      <WelcomeScreen />
      <div className="min-h-screen overflow-hidden">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RolesSection />
        <WhatsNextSection />
        <StatsSection />
        <PartnersSection />
        <BlogsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;

