import { motion } from 'framer-motion';

export default function AppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative w-full max-w-2xl mx-auto mt-12"
    >
      {/* Device frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border"
        style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#1a1a2e' }}
      >
        {/* Top bar */}
        <div className="flex items-center h-10 px-4 gap-3" style={{ background: 'rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          {/* URL bar */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md text-xs" style={{ background: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.5)' }}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              pathivo.cn/app
            </div>
          </div>
        </div>

        {/* App interface */}
        <div className="flex" style={{ height: '280px' }}>
          {/* Sidebar */}
          <div className="w-14 flex flex-col items-center py-3 gap-3" style={{ background: 'rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#165DDE' }}>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            {['○', '◇', '△'].map((s, i) => (
              <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {s}
              </div>
            ))}
          </div>

          {/* Main canvas area */}
          <div className="flex-1 relative overflow-hidden" style={{ background: '#1a1a2e' }}>
            {/* Grid dots */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(rgba(96,165,250,0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />

            {/* Floating nodes */}
            <motion.div
              className="absolute rounded-lg px-3 py-2 text-xs font-medium shadow-lg border"
              style={{ top: '22%', left: '20%', background: 'rgba(108,92,231,0.15)', borderColor: 'rgba(108,92,231,0.4)', color: '#6C5CE7' }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
                需求分析
              </div>
            </motion.div>

            <motion.div
              className="absolute rounded-lg px-3 py-2 text-xs font-medium shadow-lg border"
              style={{ top: '50%', left: '38%', background: 'rgba(0,210,255,0.15)', borderColor: 'rgba(0,210,255,0.4)', color: '#00D2FF' }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                设计阶段
              </div>
            </motion.div>

            <motion.div
              className="absolute rounded-lg px-3 py-2 text-xs font-medium shadow-lg border"
              style={{ top: '35%', left: '58%', background: 'rgba(0,230,118,0.15)', borderColor: 'rgba(0,230,118,0.4)', color: '#00E676' }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                开发资源
              </div>
            </motion.div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
              <line x1="28%" y1="28%" x2="42%" y2="50%" stroke="#6C5CE7" strokeWidth={1} strokeDasharray="3 3" />
              <line x1="42%" y1="50%" x2="62%" y2="38%" stroke="#00D2FF" strokeWidth={1} strokeDasharray="3 3" />
            </svg>

            {/* Bottom-left stats */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2 py-1 rounded-md text-xs" style={{ background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.5)' }}>
              <span>12 节点</span>
              <span className="w-px h-3" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <span>8 连线</span>
            </div>
          </div>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }} />
    </motion.div>
  );
}
