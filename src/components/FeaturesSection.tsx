import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, Eye, Plug, Zap, Brain, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Radar,
    tagline: 'Instant visibility. Instant action.',
    title: 'Real-time AI Orchestration',
    description: 'Deploy autonomous agents that monitor, analyze, and act on your data streams in milliseconds.',
    size: 'large',
  },
  {
    icon: Eye,
    tagline: 'See everything. Miss nothing.',
    title: 'Zero Blind Spots',
    description: 'Full visibility into every blockchain transaction, AI decision, and system interaction.',
    size: 'medium',
  },
  {
    icon: Plug,
    tagline: 'Plug into your stack. Fast.',
    title: 'Seamless Integration',
    description: 'Connect in minutes. Works with the protocols and tools you already use.',
    size: 'medium',
  },
];

const subFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times across all operations.',
  },
  {
    icon: Brain,
    title: 'Self-Learning',
    description: 'Agents that improve with every interaction.',
  },
  {
    icon: Shield,
    title: 'Audit-Ready',
    description: 'Full transparency and compliance built-in.',
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    const cards = gridRef.current?.querySelectorAll('.feature-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.98 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.7, 
        stagger: 0.1, 
        ease: 'power3.out' 
      },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-30" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built to protect <span className="text-gradient">every layer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            From smart contracts to autonomous agents, every component of your stack stays intelligent and secure.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large feature card */}
          <div className="feature-card bento-card md:col-span-2 lg:col-span-1 lg:row-span-2 group">
            <div className="h-full flex flex-col">
              {/* Icon visualization */}
              <div className="flex-1 flex items-center justify-center py-8 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
                  <div className="relative w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10">
                      <Radar className="w-12 h-12 text-primary" />
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-glow-sm" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-primary text-sm font-medium mb-2">{features[0].tagline}</p>
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground">{features[0].description}</p>
              </div>
            </div>
          </div>

          {/* Medium feature cards */}
          {features.slice(1).map((feature, index) => (
            <div key={index} className="feature-card bento-card group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-primary text-sm font-medium mb-2">{feature.tagline}</p>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Sub-features row */}
        <div className="grid md:grid-cols-3 gap-6">
          {subFeatures.map((feature, index) => (
            <div key={index} className="feature-card flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
