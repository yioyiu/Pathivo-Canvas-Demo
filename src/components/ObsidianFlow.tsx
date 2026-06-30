import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants, staggerContainerVariants, cardVariants } from '@/hooks/useScrollReveal';
import { obsidianContent } from '@/data/content';

export default function ObsidianFlow() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="obsidian" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="section-container relative">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-purple-300 text-xs font-medium mb-6">
            Obsidian 集成
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            {obsidianContent.title}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            {obsidianContent.subtitle}
          </p>
        </motion.div>

        {/* Pipeline background */}
        <div className="hidden lg:block absolute inset-x-0 top-[calc(50%-12px)] z-0" style={{ height: '2px' }}>
          {/* Flow line */}
          <div className="relative w-full h-full flex items-center justify-center">
            <svg className="w-full max-w-4xl mx-auto" viewBox="0 0 900 10" preserveAspectRatio="none" style={{ opacity: 0.3 }}>
              <defs>
                <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.1} />
                  <stop offset="25%" stopColor="#3B82F6" stopOpacity={0.6} />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="75%" stopColor="#8B5CF6" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <line x1="50" y1="5" x2="850" y2="5" stroke="url(#flowGrad)" strokeWidth={2} strokeLinecap="round" />
            </svg>
            {/* Flowing particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ background: '#60A5FA', boxShadow: '0 0 6px rgba(96,165,250,0.6)' }}
                animate={{
                  left: ['5%', '95%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.75,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </div>

        {/* Flow steps */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 relative z-10"
        >
          {obsidianContent.steps.map((step, i) => (
            <motion.div key={i} variants={cardVariants} className="relative">
              {/* Arrow connector */}
              {i < obsidianContent.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 z-10">
                  <svg className="w-6 h-6 text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
              <div className="glass rounded-2xl p-6 h-full">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-white/40 text-xs font-mono font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits list */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-xl font-display font-semibold text-white mb-6">
              Obsidian做不到的，Pathivo 开箱即用
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {obsidianContent.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
