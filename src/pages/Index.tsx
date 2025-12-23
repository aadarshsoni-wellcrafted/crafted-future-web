import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ServicesSection } from '@/components/ServicesSection';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { CTABanner } from '@/components/CTABanner';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    gsap.config({ nullTargetWarn: false });
    
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Wellcrafted Tech | Web3 & Agentic AI Agency</title>
        <meta 
          name="description" 
          content="Wellcrafted Tech is a premium Web3 and Agentic AI agency. We build cutting-edge blockchain solutions, smart contracts, and autonomous AI systems for industry leaders." 
        />
        <meta name="keywords" content="Web3, Blockchain, AI, Smart Contracts, DeFi, Agentic AI, Decentralized Applications" />
        <link rel="canonical" href="https://wellcrafted.tech" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Wellcrafted Tech | Web3 & Agentic AI Agency" />
        <meta property="og:description" content="Building tomorrow's digital infrastructure with cutting-edge Web3 and AI solutions." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Wellcrafted Tech",
            "description": "Premium Web3 and Agentic AI agency specializing in blockchain development and autonomous AI systems.",
            "url": "https://wellcrafted.tech",
            "sameAs": [
              "https://twitter.com/wellcraftedtech",
              "https://linkedin.com/company/wellcraftedtech",
              "https://github.com/wellcraftedtech"
            ],
            "services": [
              "Web3 Development",
              "Blockchain Solutions",
              "Agentic AI Systems",
              "Smart Contracts",
              "Full-Stack Products",
              "UI/UX Engineering"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection />
          <WhyChooseUs />
          <ServicesSection />
          <CaseStudies />
          <Testimonials />
          <CTABanner />
          <BlogSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
