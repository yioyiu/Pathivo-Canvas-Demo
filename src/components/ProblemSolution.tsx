import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants, staggerContainerVariants, cardVariants } from '@/hooks/useScrollReveal';
import { problemSolution } from '@/data/content';

export default function ProblemSolution() {
  const { ref, controls } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="section-container relative">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Problem */}
          <motion.div variants={fadeUpVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              痛点
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {problemSolution.problem.title}
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              {problemSolution.problem.description}
            </p>
            <ul className="space-y-3">
              {problemSolution.problem.painPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  custom={i}
                  className="flex items-start gap-3 text-white/60"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeUpVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              解决方案
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              {problemSolution.solution.title}
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              {problemSolution.solution.description}
            </p>
            <div className="space-y-4">
              {problemSolution.solution.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="glass rounded-xl p-5"
                >
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-white/50">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
