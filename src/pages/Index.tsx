import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SmoothScroll>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <Footer />
    </SmoothScroll>
  );
};

export default Index;
