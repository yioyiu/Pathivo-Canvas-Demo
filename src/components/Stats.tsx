import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants, staggerContainerVariants } from '@/hooks/useScrollReveal';
import { stats } from '@/data/content';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Stats() {
  const { ref, controls } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="glass rounded-3xl p-8 lg:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
