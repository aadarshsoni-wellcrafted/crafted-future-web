import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Bot, Sparkles } from 'lucide-react';

const clientLogos = [
  'InFlux',
  'ChainVault', 
  'NeuraCorp',
  'MetaDAO',
  'ZKLabs',
  'AgentForge',
];

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate badge
    tl.fromTo(
      '.hero-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    // Animate headline
    .fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    )
    // Animate subtext
    .fromTo(
      subtextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    // Animate CTAs
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.3'
    )
    // Animate marquee
    .fromTo(
      marqueeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );

  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-glow opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Animated vertical lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-line-flow"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center pt-32 pb-20">
        {/* Trust badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <Check className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Trusted by over 50+ companies worldwide
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-8 text-foreground"
        >
          Autonomous Intelligence
          <br />
          <span className="text-gradient">for the Decentralized Era</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 text-balance font-body"
        >
          We build agentic AI systems and Web3 infrastructure that operate autonomously, 
          scale infinitely, and transform how businesses interact with the future.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="glow" size="xl" className="group">
            Request demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            Discover more
          </Button>
        </div>

        {/* Client logos marquee */}
        <div ref={marqueeRef} className="relative">
          <p className="text-sm text-muted-foreground mb-8">
            Powering the World's Most Innovative Companies
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            
            {/* Marquee */}
            <div className="flex gap-16 animate-marquee">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 shrink-0 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <Bot className="w-5 h-5" />
                  <span className="font-display text-lg font-semibold whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-scroll" />
        </div>
      </div>
    </section>
  );
};
