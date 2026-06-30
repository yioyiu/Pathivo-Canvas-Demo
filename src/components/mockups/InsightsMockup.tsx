import { motion } from 'framer-motion';

const insights = [
  { label: '关键路径', value: '设计 → 开发 → 测试', color: '#3B82F6', status: 'info' },
  { label: '风险预警', value: '后端开发进度滞后 3 天', color: '#EF4444', status: 'warning' },
  { label: '优化建议', value: '资源分配不均，建议调整', color: '#F59E0B', status: 'tip' },
  { label: '完成进度', value: '67%', color: '#22C55E', status: 'success' },
];

export default function InsightsMockup() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ background: '#F3F6FC' }}>
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 h-10 flex items-center px-4 gap-4" style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #D8E0F0' }}>
        <span className="text-xs font-bold tracking-wider" style={{ color: '#7C3AED', fontFamily: "'Space Grotesk', sans-serif" }}>PATHIVO</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs px-2 py-0.5 rounded" style={{ background: '#7C3AED', color: 'white' }}>洞察</span>
          <span className="text-xs px-2 py-0.5 rounded" style={{ background: '#EEF2FB', color: '#6B7280' }}>AI 分析</span>
        </div>
      </div>

      <div className="absolute inset-0 pt-12 pb-3 px-4 overflow-hidden flex flex-col gap-2">
        {/* Summary card */}
        <motion.div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid #D8E0F0' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4" style={{ color: '#7C3AED' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: '#4B5563' }}>AI 分析摘要</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
            项目整体进度正常，但<strong style={{ color: '#EF4444' }}>后端开发</strong>存在延期风险。
            建议调整资源分配，优先解决阻塞任务。
          </p>
        </motion.div>

        {/* Insight cards */}
        {insights.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl p-2.5 flex items-center gap-3"
            style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid #D8E0F0' }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          >
            {/* Icon */}
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${item.color}15` }}
            >
              {item.status === 'info' && (
                <svg className="w-3.5 h-3.5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {item.status === 'warning' && (
                <svg className="w-3.5 h-3.5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              )}
              {item.status === 'tip' && (
                <svg className="w-3.5 h-3.5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
              {item.status === 'success' && (
                <svg className="w-3.5 h-3.5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold" style={{ color: '#4B5563' }}>{item.label}</div>
              <div className="text-[10px] truncate" style={{ color: item.color }}>{item.value}</div>
            </div>
            {/* Status indicator */}
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
