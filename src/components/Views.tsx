import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '@/hooks/useScrollReveal';
import { views } from '@/data/content';
import CanvasMockup from '@/components/mockups/CanvasMockup';
import TimelineMockup from '@/components/mockups/TimelineMockup';
import InsightsMockup from '@/components/mockups/InsightsMockup';

export default function Views() {
  const { ref, controls } = useScrollReveal();
  const [activeView, setActiveView] = useState(views[0]);

  return (
    <section id="views" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="section-container relative">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-blue-300 text-xs font-medium mb-6">
            多视图
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            同一份数据，多种视角
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            自由画布、鱼骨图、时间线、大纲列表 — 适应不同思考阶段，无需重复录入
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeView.id === view.id
                  ? 'glass text-white border-white/10'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>

        {/* View content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Visual mockup area */}
              <div className="lg:col-span-3 relative min-h-[300px] lg:min-h-[400px] p-0 overflow-hidden">
                {activeView.id === 'canvas' && <CanvasMockup />}
                {activeView.id === 'timeline' && <TimelineMockup />}
                {activeView.id === 'insights' && <InsightsMockup />}
              </div>

              {/* Feature list */}
              <div className="lg:col-span-2 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/5">
                <h4 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-6">
                  核心能力
                </h4>
                <ul className="space-y-4">
                  {activeView.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
