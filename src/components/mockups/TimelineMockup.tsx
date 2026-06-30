import { motion } from 'framer-motion';

const items = [
  { label: '需求评审', start: 5, end: 28, color: '#6C5CE7', status: 'done' },
  { label: 'UI 设计', start: 22, end: 45, color: '#00D2FF', status: 'active' },
  { label: '前端开发', start: 30, end: 60, color: '#3B82F6', status: 'active' },
  { label: '后端开发', start: 35, end: 70, color: '#F59E0B', status: 'todo' },
  { label: '测试验收', start: 55, end: 80, color: '#00E676', status: 'todo' },
  { label: '部署上线', start: 72, end: 92, color: '#FF4081', status: 'todo' },
  { label: '项目结项', start: 85, end: 95, color: '#FF9100', status: 'blocked' },
];

const months = ['3月', '4月', '5月', '6月'];

export default function TimelineMockup() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ background: '#F3F6FC' }}>
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 h-10 flex items-center px-4 gap-4 z-10" style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #D8E0F0' }}>
        <span className="text-xs font-bold tracking-wider" style={{ color: '#059669', fontFamily: "'Space Grotesk', sans-serif" }}>PATHIVO</span>
        <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: '#059669', color: 'white' }}>时间线</span>
        <div className="ml-auto flex gap-1 text-xs">
          <span className="px-2 py-0.5 rounded" style={{ background: '#165DDE', color: 'white' }}>日</span>
          <span className="px-2 py-0.5 rounded" style={{ background: '#EEF2FB', color: '#6B7280' }}>周</span>
          <span className="px-2 py-0.5 rounded" style={{ background: '#EEF2FB', color: '#6B7280' }}>月</span>
        </div>
      </div>

      {/* Header dates */}
      <div className="absolute top-10 inset-x-0 h-6 flex z-10" style={{ background: 'rgba(243,246,252,0.95)', borderBottom: '1px solid #D8E0F0' }}>
        <div className="w-[90px] flex-shrink-0 border-r px-2 flex items-center" style={{ borderColor: '#D8E0F0' }}>
          <span className="text-xs font-semibold" style={{ color: '#4B5563' }}>任务</span>
        </div>
        {months.map((m, i) => (
          <div key={i} className="flex-1 flex items-center justify-center border-r text-xs font-medium" style={{ color: '#6B7280', borderColor: '#D8E0F0' }}>
            {m}
          </div>
        ))}
        <div className="w-8 flex-shrink-0" />
      </div>

      {/* Today line indicator */}
      <div className="absolute top-10 bottom-0 z-10" style={{ left: 'calc(90px + 49%)', width: '2px' }}>
        <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom, #EF4444, transparent)' }}>
          <div className="absolute top-0 -left-1 w-1 h-3 rounded-full bg-[#EF4444]" />
        </div>
      </div>

      {/* Rows */}
      <svg className="absolute inset-0 w-full h-full pt-16 pb-3" viewBox="0 0 100 94">
        {/* Grid lines */}
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1={14 + i * 20} y1={0} x2={14 + i * 20} y2={94} stroke="#E5E7EB" strokeWidth={0.3} />
        ))}

        {items.map((item, i) => {
          const y = 8 + i * 11;
          const barLeft = 6 + item.start * 0.85;
          const barWidth = (item.end - item.start) * 0.85;
          const statusColors: Record<string, string> = {
            done: '#22C55E',
            active: '#3B82F6',
            todo: '#94A3B8',
            blocked: '#EF4444',
          };
          return (
            <g key={i}>
              {/* Row bg */}
              <rect x={0} y={y - 3} width={100} height={10} fill={i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent'} />
              {/* Label column */}
              <text x={0} y={y + 3} fontSize={3.5} fill="#4B5563" fontWeight={500} textLength={11}>
                {item.label}
              </text>
              {/* Gantt bar */}
              <motion.rect
                x={barLeft} y={y - 1.5}
                width={0} height={6} rx={2}
                fill={item.color}
                opacity={item.status === 'todo' ? 0.5 : 0.85}
                initial={{ width: 0 }}
                animate={{ width: barWidth }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
              />
              {/* Bar progress fill for active items */}
              {item.status === 'active' && (
                <motion.rect
                  x={barLeft} y={y - 1.5}
                  width={0} height={6} rx={2}
                  fill={item.color}
                  opacity={0.3}
                  initial={{ width: 0 }}
                  animate={{ width: barWidth }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
                />
              )}
              {/* Status dot */}
              <circle cx={barLeft + barWidth + 1.5} cy={y + 1.5} r={1.5} fill={statusColors[item.status]} />
            </g>
          );
        })}
      </svg>

      {/* Bottom stats */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2 py-1 rounded-md text-xs" style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #D8E0F0', color: '#6B7280' }}>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> 1 已完成</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /> 2 进行中</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" /> 4 待办</span>
      </div>
    </div>
  );
}
