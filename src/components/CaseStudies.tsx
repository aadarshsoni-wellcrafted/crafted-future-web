import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'InFlux Cloud',
    category: 'Infrastructure',
    description: 'Decentralized cloud computing platform enabling globally distributed peer-to-peer infrastructure with FluxAI integration.',
    tech: ['Rust', 'WebAssembly', 'Kubernetes', 'AI/ML'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'text-cyan-600',
  },
  {
    name: 'ChainVault Protocol',
    category: 'DeFi',
    description: 'Cross-chain yield aggregator managing over $500M in TVL across 8 blockchain networks.',
    tech: ['Solidity', 'The Graph', 'React', 'Hardhat'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-600',
  },
  {
    name: 'NeurAgent',
    category: 'AI Platform',
    description: 'Enterprise AI agent platform enabling autonomous task execution with human-in-the-loop workflows.',
    tech: ['Python', 'LangChain', 'Vector DB', 'FastAPI'],
    gradient: 'from-violet-500/20 to-purple-500/20',
    accent: 'text-violet-600',
  },
  {
    name: 'MetaDAO Governance',
    category: 'DAO Tooling',
    description: 'Comprehensive governance suite for DAOs including voting, treasury management, and proposal automation.',
    tech: ['Solidity', 'IPFS', 'Next.js', 'Wagmi'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-600',
  },
  {
    name: 'ZeroKnowledge ID',
    category: 'Identity',
    description: 'Privacy-preserving identity verification using zero-knowledge proofs for Web3 applications.',
    tech: ['Circom', 'SnarkJS', 'Rust', 'TypeScript'],
    gradient: 'from-rose-500/20 to-pink-500/20',
    accent: 'text-rose-600',
  },
];

export const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

    const cards = projectsRef.current?.querySelectorAll('.project-card');
    tl.fromTo(
      cards,
      { opacity: 0, x: -30, scale: 0.98 },
      { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        duration: 0.7, 
        stagger: 0.15, 
        ease: 'power3.out' 
      },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies That <span className="text-gradient">Speak Volumes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our portfolio of successful Web3 and AI projects that have 
            transformed industries.
          </p>
        </div>

        {/* Projects */}
        <div ref={projectsRef} className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-premium-lg cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                {/* Project Number */}
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-muted items-center justify-center shrink-0">
                  <span className="font-display text-2xl font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm font-semibold ${project.accent}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-muted text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-muted items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
