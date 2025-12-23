import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Blocks, 
  Brain, 
  Code2, 
  FileCode, 
  Layers, 
  Palette,
  ArrowUpRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Blocks,
    title: 'Web3 Development',
    description: 'Full-stack decentralized applications built on leading blockchain protocols.',
    tags: ['DeFi', 'DAOs', 'dApps'],
  },
  {
    icon: Layers,
    title: 'Blockchain Solutions',
    description: 'Custom blockchain networks, layer 2 solutions, and cross-chain bridges.',
    tags: ['L1/L2', 'Bridges', 'Nodes'],
  },
  {
    icon: Brain,
    title: 'Agentic AI Systems',
    description: 'Autonomous AI agents that execute complex tasks with human-level reasoning.',
    tags: ['LLMs', 'Automation', 'RAG'],
  },
  {
    icon: FileCode,
    title: 'Smart Contracts',
    description: 'Secure, audited smart contracts for tokens, NFTs, and complex protocols.',
    tags: ['Solidity', 'Rust', 'Audits'],
  },
  {
    icon: Code2,
    title: 'Full-Stack Products',
    description: 'End-to-end product development from ideation to production deployment.',
    tags: ['MVP', 'Scale', 'Launch'],
  },
  {
    icon: Palette,
    title: 'UI/UX Engineering',
    description: 'Beautiful, intuitive interfaces that make complex technology accessible.',
    tags: ['Design', 'Frontend', 'Motion'],
  },
];

export const ServicesSection = () => {
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

    const cards = gridRef.current?.querySelectorAll('.service-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 50, rotateY: -10 },
      { 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
        duration: 0.7, 
        stagger: 0.12, 
        ease: 'power3.out' 
      },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services That <span className="text-gradient">Drive Innovation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to deployment, we offer comprehensive solutions for the 
            decentralized future.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-premium-lg"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-muted text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
