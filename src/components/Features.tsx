import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants, staggerContainerVariants } from '@/hooks/useScrollReveal';
import { features } from '@/data/content';
import GlassCard from '@/components/ui/GlassCard';
import TiltCard from '@/components/ui/TiltCard';

export default function Features() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="features" ref={ref} className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="section-container relative">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-blue-300 text-xs font-medium mb-6">
            核心能力
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            不只是画布
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            从节点到连线，从进度到洞察 — Pathivo 提供完整的结构化任务管理能力
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeUpVariants}>
              <TiltCard maxTilt={6} scale={1.02} className="h-full">
                <GlassCard className="h-full group relative overflow-hidden">
                  {/* Shimmer overlay on hover */}
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </GlassCard>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
