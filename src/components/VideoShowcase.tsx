import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '@/hooks/useScrollReveal';
import { videoShowcase } from '@/data/content';

export default function VideoShowcase() {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={controls}
      className="mb-16 lg:mb-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative glass rounded-2xl overflow-hidden group">
          {/* Gradient border glow on hover */}
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.15), transparent)',
              filter: 'blur(8px)',
            }}
          />

          {/* Video — autoplay loop, no controls, no interaction */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
            <video
              src={`${import.meta.env.BASE_URL}product-intro.mp4`}
              poster={`${import.meta.env.BASE_URL}product-intro-poster.jpg`}
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* Caption + feature tags below video */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/50 text-sm leading-relaxed max-w-xl">
            {videoShowcase.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            {videoShowcase.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full glass text-blue-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
