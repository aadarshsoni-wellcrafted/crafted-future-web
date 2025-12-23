import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Shield, Zap, Users, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Rocket,
    title: 'Rapid Delivery',
    description: 'From concept to launch in record time, without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Battle-Tested Security',
    description: 'Audited smart contracts and enterprise-grade security protocols.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'We leverage the latest in Web3 and AI to give you a competitive edge.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior engineers with decades of combined blockchain experience.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Trusted by leading protocols and Fortune 500 companies.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Architecture designed for millions of users from day one.',
  },
];

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Stagger cards animation
    const cards = cardsRef.current?.querySelectorAll('.feature-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    );

    // Highlight section animation
    tl.fromTo(
      highlightRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            We Don't Just Build,{' '}
            <span className="text-gradient">We Craft Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our approach combines deep technical expertise with a relentless focus on 
            delivering measurable business outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card-premium p-8 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* InFlux Highlight */}
        <div
          ref={highlightRef}
          className="relative overflow-hidden rounded-3xl bg-gradient-cta p-8 md:p-12 lg:p-16"
        >
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              Featured Project
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              InFlux Technologies
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl">
              We partnered with InFlux Technologies to build their decentralized cloud 
              infrastructure — a globally distributed peer-to-peer compute network powering 
              the next generation of Web3 applications. FluxCloud enables private deployment, 
              management, and scaling of apps with unmatched data integrity and redundancy.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Decentralized Cloud', 'P2P Infrastructure', 'FluxAI', 'Data Redundancy'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl bg-primary-foreground/10 text-primary-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
