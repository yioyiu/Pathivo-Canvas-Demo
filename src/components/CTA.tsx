import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '@/hooks/useScrollReveal';
import { ctaContent } from '@/data/content';
import Button from '@/components/ui/Button';

export default function CTA() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="cta" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pathivo-950 via-blue-950/20 to-pathivo-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-500/15 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {ctaContent.title}
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            {ctaContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button href={ctaContent.primaryCta.href} size="lg" magnetic>
              {ctaContent.primaryCta.label}
            </Button>
            <Button href={ctaContent.secondaryCta.href} variant="secondary" size="lg" magnetic>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {ctaContent.secondaryCta.label}
            </Button>
          </div>

          <p className="text-white/30 text-sm">{ctaContent.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
