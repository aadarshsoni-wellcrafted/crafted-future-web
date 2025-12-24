import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Analyze & Connect',
    subtitle: 'Surface insights instantly',
    description: 'Our system scans your infrastructure the moment it connects — uncovering inefficiencies, mapping data flows, and identifying optimization opportunities before they become bottlenecks.',
  },
  {
    number: '02',
    title: 'Deploy Agents',
    subtitle: 'Autonomous intelligence at work',
    description: 'Once opportunities are identified, intelligent agents are deployed to handle complex workflows, automate decisions, and execute tasks with precision.',
  },
  {
    number: '03',
    title: 'Evolve & Scale',
    subtitle: 'Stay ahead of the curve',
    description: 'The platform keeps learning from your operations and market patterns. You get ongoing optimizations, proactive alerts, and seamless scaling — without lifting a finger.',
  },
];

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    const stepCards = stepsRef.current?.querySelectorAll('.step-card');
    tl.fromTo(
      stepCards,
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.7, 
        stagger: 0.2, 
        ease: 'power3.out' 
      },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-glow opacity-20" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              How it works
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
              How we power your <span className="text-gradient">autonomous future</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground mb-6 max-w-md">
              No complexity. Just clean, effective intelligence in three simple steps.
            </p>
            <Button variant="glow" className="group">
              Request demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 md:p-10 transition-all duration-500 hover:border-primary/30"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                {/* Step number */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{step.subtitle}</p>
                  <p className="text-muted-foreground max-w-2xl">{step.description}</p>
                </div>

                {/* Visual element */}
                <div className="hidden lg:flex items-center justify-center shrink-0">
                  <div className="w-32 h-24 rounded-xl border border-border/50 bg-secondary/30 flex items-center justify-center">
                    <div className="w-full h-full p-3">
                      {/* Mini visualization */}
                      <div className="w-full h-full rounded border border-primary/20 bg-primary/5 flex flex-col gap-1 p-2">
                        <div className="h-1 w-3/4 rounded bg-primary/40" />
                        <div className="h-1 w-1/2 rounded bg-primary/30" />
                        <div className="h-1 w-2/3 rounded bg-primary/20" />
                        <div className="flex-1" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                          <div className="w-2 h-2 rounded-full bg-primary/40" />
                          <div className="w-2 h-2 rounded-full bg-primary/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
