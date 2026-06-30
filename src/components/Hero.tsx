import { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import RevealText from '@/components/ui/RevealText';
import AppPreview from '@/components/mockups/AppPreview';
import { heroContent } from '@/data/content';
import { useMousePosition } from '@/hooks/useMousePosition';

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles (node network motif)
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx!.fill();

        // Draw connections (like node network)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.strokeStyle = `rgba(96, 165, 250, ${0.06 * (1 - dist / 150)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const mouse = useMousePosition();

  // Spring-animated parallax values for smooth following
  const springNx = useSpring(mouse.nx, { stiffness: 60, damping: 30 });
  const springNy = useSpring(mouse.ny, { stiffness: 60, damping: 30 });

  // Parallax multipliers for each layer (deeper = more movement)
  const orb1X = useTransform(springNx, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(springNy, [-1, 1], [-20, 20]);
  const orb2X = useTransform(springNx, [-1, 1], [20, -20]);
  const orb2Y = useTransform(springNy, [-1, 1], [15, -15]);
  const dot1X = useTransform(springNx, [-1, 1], [-15, 15]);
  const dot1Y = useTransform(springNy, [-1, 1], [-10, 10]);
  const dot2X = useTransform(springNx, [-1, 1], [10, -10]);
  const dot2Y = useTransform(springNy, [-1, 1], [8, -8]);
  const dot3X = useTransform(springNx, [-1, 1], [-8, 8]);
  const dot3Y = useTransform(springNy, [-1, 1], [-6, 6]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-pathivo-950" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <ParticleNetwork />

      {/* Gradient orbs — parallax */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]"
      />

      {/* Floating node decorations — parallax */}
      <motion.div
        style={{ x: dot1X, y: dot1Y }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[15%] w-4 h-4 rounded-full border border-blue-400/30"
      />
      <motion.div
        style={{ x: dot2X, y: dot2Y }}
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 left-[10%] w-3 h-3 rounded-full bg-blue-400/20"
      />
      <motion.div
        style={{ x: dot3X, y: dot3Y }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-[20%] w-2 h-2 rounded-full bg-purple-400/30"
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-blue-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          {heroContent.badge}
        </motion.div>

        <RevealText
          as="h1"
          delay={0.4}
          stagger={0.08}
          spanClassName="gradient-text"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight text-balance mb-6"
        >
          {heroContent.title}
        </RevealText>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={heroContent.primaryCta.href} size="lg" magnetic>
            {heroContent.primaryCta.label}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="secondary" size="lg" magnetic>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {heroContent.secondaryCta.label}
          </Button>
        </motion.div>

        {/* App Preview */}
        <AppPreview />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-medium tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
