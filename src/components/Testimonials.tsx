import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Wellcrafted Tech deployed our AI agent infrastructure in weeks. The autonomous systems now handle 80% of our operations seamlessly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "ChainVault",
  },
  {
    quote: "Their Web3 expertise combined with agentic AI gave us capabilities we didn't think were possible. Game-changing partner.",
    author: "Marcus Williams",
    role: "Head of Operations",
    company: "NeuraCorp",
  },
  {
    quote: "From ideation to production, Wellcrafted guided us through every step. Our platform now serves millions globally.",
    author: "Elena Rodriguez",
    role: "Founder & CEO",
    company: "MetaDAO",
  },
  {
    quote: "The zero-knowledge implementation was flawless. Their team understands both the tech and the business implications.",
    author: "David Park",
    role: "Chief Architect",
    company: "ZKLabs",
  },
  {
    quote: "Setup was almost too easy. We had intelligent agents running before our morning standup ended.",
    author: "Aisha Thompson",
    role: "VP Engineering",
    company: "InFlux",
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="section-container">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by teams <span className="text-gradient">that move fast</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Industry leaders rely on our platform to power their autonomous future.
          </p>
        </div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        
        <div className="flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-[400px] p-8 rounded-2xl border border-border/50 bg-card"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
