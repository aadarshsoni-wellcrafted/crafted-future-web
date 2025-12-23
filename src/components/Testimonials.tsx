import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Wellcrafted Tech delivered our DeFi platform ahead of schedule with impeccable security standards. Their expertise in smart contract development is unmatched.",
    author: "Sarah Chen",
    role: "CTO, ChainVault",
    company: "ChainVault Protocol",
  },
  {
    quote: "The AI agent system they built has transformed our operations. We've reduced manual tasks by 80% while improving accuracy. Truly game-changing.",
    author: "Marcus Williams",
    role: "Head of Operations",
    company: "NeuraCorp",
  },
  {
    quote: "Working with Wellcrafted felt like an extension of our team. Their deep understanding of Web3 and commitment to quality is exceptional.",
    author: "Elena Rodriguez",
    role: "Founder & CEO",
    company: "MetaDAO",
  },
  {
    quote: "They took our complex requirements and delivered an elegant solution. The zero-knowledge implementation was flawless and ahead of industry standards.",
    author: "David Park",
    role: "Chief Architect",
    company: "ZeroKnowledge Labs",
  },
  {
    quote: "From ideation to deployment, Wellcrafted Tech guided us through every step. Our platform now serves millions of users globally.",
    author: "Aisha Thompson",
    role: "VP Engineering",
    company: "InFlux Technologies",
  },
  {
    quote: "The team's ability to bridge cutting-edge AI with blockchain technology opened entirely new possibilities for our product roadmap.",
    author: "James Liu",
    role: "Product Lead",
    company: "AgentForge",
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from the teams who've partnered with us to build the future.
          </p>
        </div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div ref={marqueeRef} className="relative">
        {/* First row - scrolling right */}
        <div className="flex gap-6 mb-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-[400px] md:w-[500px] p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};
