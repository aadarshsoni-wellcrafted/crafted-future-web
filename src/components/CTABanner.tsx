import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Floating orbs animation
    const orbs = orbsRef.current?.querySelectorAll('.floating-orb');
    gsap.to(orbs, {
      y: -20,
      duration: 4,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-subtle overflow-hidden">
      <div className="section-container">
        <div className="relative rounded-3xl bg-gradient-cta p-10 md:p-16 lg:p-20 overflow-hidden">
          {/* Floating decorative orbs */}
          <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
            <div className="floating-orb absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="floating-orb absolute bottom-10 right-10 w-48 h-48 rounded-full bg-secondary/30 blur-3xl" />
            <div className="floating-orb absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-primary-foreground/10 blur-2xl" />
            
            {/* 3D-like geometric shapes */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-primary-foreground/20 rounded-xl rotate-45 animate-float" />
            <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-accent/30 rounded-full animate-float-delayed" />
            <div className="absolute top-1/3 right-1/6 w-8 h-8 bg-primary-foreground/10 rounded-lg rotate-12 animate-float" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Ready to innovate?
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Let's Craft the Future,{' '}
              <span className="text-accent">Together</span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Whether you're building the next breakthrough protocol or scaling 
              an AI-powered product, we're here to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group bg-accent hover:bg-accent/90">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Schedule a Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-10 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60 mb-4">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {['InFlux', 'ChainVault', 'MetaDAO', 'NeuraCorp', 'ZKLabs'].map((company) => (
                  <span key={company} className="font-display text-lg font-semibold text-primary-foreground">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
