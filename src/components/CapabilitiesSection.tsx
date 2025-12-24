import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Layers, 
  Globe, 
  Activity, 
  Settings, 
  RefreshCw,
  Bot
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Layers,
    tagline: 'Adaptive intelligence layers',
    title: 'Built to grow with you',
    description: 'Whether you\'re scaling from 5 to 500 AI agents, our architecture adapts dynamically — from cloud-native microservices to enterprise-grade orchestration.',
    size: 'large',
  },
  {
    icon: Globe,
    tagline: 'Unified visibility. Global protection',
    title: 'Multi-chain Awareness',
    description: 'Stay connected across blockchains, protocols, and AI systems in real-time.',
    size: 'small',
  },
  {
    icon: Activity,
    title: 'Behavioral Pattern Detection',
    description: 'Detects subtle deviations in agent and system behavior before they become issues.',
    size: 'small',
  },
  {
    icon: Settings,
    title: 'Modular Agent Engine',
    description: 'Customize how your AI systems react — with building blocks for autonomous decision logic.',
    size: 'small',
  },
  {
    icon: RefreshCw,
    tagline: 'Always up to date. Always intelligent.',
    title: 'Zero Config Maintenance',
    description: 'Forget manual updates or policy tuning. Our platform keeps everything current and resilient — without your team lifting a finger.',
    size: 'large',
  },
];

export const CapabilitiesSection = () => {
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

    const cards = gridRef.current?.querySelectorAll('.capability-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
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
    <section id="capabilities" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Advanced Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Automate intelligence. <span className="text-gradient">Customize everything.</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            These advanced capabilities give you the automation, flexibility, and resilience needed to stay ahead of the curve.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First large card */}
          <div className="capability-card bento-card lg:col-span-2 group">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Visualization */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Stacked layers */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 -translate-x-1/2 w-24 h-8 rounded-lg border border-primary/30 bg-primary/10"
                      style={{
                        bottom: `${i * 24}px`,
                        width: `${96 - i * 12}px`,
                        opacity: 1 - i * 0.2,
                      }}
                    >
                      <div className="absolute inset-x-2 top-2 h-1 rounded bg-primary/40" />
                      <div className="absolute inset-x-2 bottom-2 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <div className="w-2 h-2 rounded-full bg-primary/40" />
                        <div className="w-2 h-2 rounded-full bg-primary/20" />
                      </div>
                    </div>
                  ))}
                  <Bot className="absolute bottom-24 left-1/2 -translate-x-1/2 w-8 h-8 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-primary text-sm font-medium mb-2">{capabilities[0].tagline}</p>
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {capabilities[0].title}
                </h3>
                <p className="text-muted-foreground">{capabilities[0].description}</p>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="capability-card bento-card group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <p className="text-primary text-sm font-medium mb-2">{capabilities[1].tagline}</p>
            <h3 className="font-display text-lg font-bold mb-2 text-foreground">{capabilities[1].title}</h3>
            <p className="text-muted-foreground text-sm">{capabilities[1].description}</p>
          </div>

          {/* Two small cards in a row */}
          <div className="capability-card bento-card group">
            <h3 className="font-display text-lg font-bold mb-2 text-foreground flex items-center gap-3">
              <Activity className="w-5 h-5 text-primary" />
              {capabilities[2].title}
            </h3>
            <p className="text-muted-foreground text-sm">{capabilities[2].description}</p>
          </div>

          <div className="capability-card bento-card group">
            <h3 className="font-display text-lg font-bold mb-2 text-foreground flex items-center gap-3">
              <Settings className="w-5 h-5 text-primary" />
              {capabilities[3].title}
            </h3>
            <p className="text-muted-foreground text-sm">{capabilities[3].description}</p>
          </div>

          {/* Last large card */}
          <div className="capability-card bento-card lg:col-span-2 group">
            <div className="flex flex-col md:flex-row-reverse gap-8">
              {/* Visualization */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10">
                    <RefreshCw className="w-8 h-8 text-primary" />
                  </div>
                  {/* Status indicators */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-primary/20 text-[10px] text-primary font-medium">
                    up-to-date
                  </div>
                  <div className="absolute -bottom-1 left-0 px-2 py-1 rounded bg-primary/20 text-[10px] text-primary font-medium">
                    self-heal
                  </div>
                  <div className="absolute -bottom-1 right-0 px-2 py-1 rounded bg-primary/20 text-[10px] text-primary font-medium">
                    auto-fix
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-primary text-sm font-medium mb-2">{capabilities[4].tagline}</p>
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {capabilities[4].title}
                </h3>
                <p className="text-muted-foreground">{capabilities[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
