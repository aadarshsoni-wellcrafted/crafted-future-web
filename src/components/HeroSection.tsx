import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate headline words
    const words = headlineRef.current?.querySelectorAll('.word');
    
    tl.fromTo(
      words,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(
        decorRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
        '-=0.4'
      );

    // Floating animation for decorations
    gsap.to('.float-element', {
      y: -15,
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });

  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background decorations */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="float-element absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="float-element absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="float-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Web3 & Agentic AI Pioneers</span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <span className="word inline-block">Building</span>{' '}
          <span className="word inline-block bg-gradient-accent bg-clip-text text-transparent">Tomorrow's</span>
          <br />
          <span className="word inline-block">Digital</span>{' '}
          <span className="word inline-block">Infrastructure</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 text-balance font-body"
        >
          We craft cutting-edge Web3 solutions and intelligent AI agents that 
          transform industries. From blockchain architecture to autonomous systems, 
          we engineer the future.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">
          <Button variant="hero" size="xl" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            <Zap className="w-5 h-5" />
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '$2B+', label: 'Total Value Locked' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '24/7', label: 'Expert Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-accent animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};
