import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const badges = ['SOC 2 Ready', 'No credit card needed', 'EU-hosted', 'Cancel anytime', 'GDPR Compliant', 'Setup in minutes'];

export const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-40" />

      <div className="section-container relative z-10">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stay ahead of the <span className="text-gradient">competition</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Deploy in one click. No setup. No stress.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{badge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="xl" className="group">
              Get started free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
