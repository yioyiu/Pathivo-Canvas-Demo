import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import Views from '@/components/Views';
import ObsidianFlow from '@/components/ObsidianFlow';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function App() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Track scroll progress for decorative top bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Smooth reveal animation for sections as they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-pathivo-950">
        <NoiseOverlay />
        {/* Scroll progress indicator */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-[60] origin-left"
        />

        {/* Navigation */}
        <Nav />

        <main>
          {/* Hero */}
          <Hero />

          {/* Problem/Solution */}
          <ProblemSolution />
          <SectionDivider />

          {/* Features */}
          <Features />
          <SectionDivider />

          {/* Stats */}
          <Stats />
          <SectionDivider />

          {/* Views */}
          <Views />
          <SectionDivider />

          {/* Obsidian Integration */}
          <ObsidianFlow />
          <SectionDivider />

          {/* CTA */}
          <CTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
