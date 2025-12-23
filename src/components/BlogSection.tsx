import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    title: 'The Rise of Agentic AI: Beyond Traditional Automation',
    excerpt: 'Exploring how autonomous AI agents are reshaping enterprise operations and decision-making.',
    category: 'AI',
    date: 'Dec 18, 2024',
    readTime: '8 min read',
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    title: 'Web3 Security Best Practices for 2025',
    excerpt: 'A comprehensive guide to securing your decentralized applications against emerging threats.',
    category: 'Security',
    date: 'Dec 15, 2024',
    readTime: '12 min read',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Building Scalable Cross-Chain Bridges',
    excerpt: 'Technical deep-dive into architecting reliable and secure blockchain interoperability solutions.',
    category: 'Blockchain',
    date: 'Dec 10, 2024',
    readTime: '15 min read',
    gradient: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    title: 'Zero-Knowledge Proofs Explained',
    excerpt: 'Demystifying ZK technology and its transformative potential for privacy-first applications.',
    category: 'Cryptography',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
];

export const BlogSection = () => {
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

    const cards = gridRef.current?.querySelectorAll('.blog-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
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
    <section id="blog" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Insights & Updates
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Latest from the <span className="text-gradient">Lab</span>
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent font-medium group"
          >
            View all articles
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className={`blog-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-premium-lg cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Category & Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm font-semibold">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6">
                  {blog.excerpt}
                </p>

                {/* Read time & Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                  <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
