import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurTechnology from "@/components/OurTechnology";
import Applications from "@/components/Applications";
import OurSolutions from "@/components/OurSolutions";
import WhyOrealis from "@/components/WhyOrealis";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <OurTechnology />
      <Applications />
      <OurSolutions />
      <WhyOrealis />
      <CTA/>
      <Footer/>
    </div>
  );
}