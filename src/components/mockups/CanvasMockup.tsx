import { motion } from 'framer-motion';

const nodes = [
  { x: 18, y: 50, color: '#6C5CE7', label: '需求分析', status: 'done' },
  { x: 62, y: 28, color: '#00D2FF', label: '设计阶段', status: 'active' },
  { x: 62, y: 72, color: '#FF9100', label: '产品想法', status: 'todo' },
];

const edges = [[0, 1], [0, 2]];

export default function CanvasMockup() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{ background: '#F3F6FC' }}
    >
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 h-10 flex items-center px-4 gap-4 z-10"
        style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #D8E0F0' }}
      >
        <span className="text-xs font-bold tracking-wider" style={{ color: '#3B82F6', fontFamily: "'Space Grotesk', sans-serif" }}>PATHIVO</span>
        <div className="flex gap-3 ml-4">
          {['工作台', '画布', '时间线'].map(t => (
            <span key={t} className="text-xs font-medium" style={{ color: t === '画布' ? '#165DDE' : '#6B7280', borderBottom: t === '画布' ? '2px solid #165DDE' : '2px solid transparent', paddingBottom: '2px' }}>
              {t}
            </span>
          ))}
        </div>
        <div className="ml-auto w-28 h-6 rounded-full flex items-center px-3 text-xs" style={{ background: '#EEF2FB', color: '#94A3B8' }}>
          <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          搜索节点...
        </div>
      </div>

      {/* Canvas area with 3 nodes */}
      <div className="absolute inset-0 pt-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ padding: '12px' }}>
          {/* Grid dots */}
          <defs>
            <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="0.5" fill="#D8E0F0" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Edges */}
          {edges.map(([from, to], i) => {
            const f = nodes[from], t = nodes[to];
            return (
              <motion.path
                key={i}
                d={`M ${f.x} ${f.y} Q ${(f.x + t.x) / 2} ${(f.y + t.y) / 2 + 3} ${t.x} ${t.y}`}
                fill="none"
                stroke="#94A3B8"
                strokeWidth={0.6}
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeInOut' }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={i}>
              {/* Connection ports */}
              {[
                [node.x, node.y - 10],
                [node.x, node.y + 10],
                [node.x - 16, node.y],
                [node.x + 16, node.y],
              ].map(([cx, cy], j) => (
                <circle key={j} cx={cx} cy={cy} r={1.2} fill="#94A3B8" opacity={0.5} />
              ))}
              <motion.rect
                x={node.x - 16} y={node.y - 10}
                width={32} height={20} rx={6}
                fill="white"
                stroke={node.color}
                strokeWidth={1.5}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.95, 1, 0.95], opacity: 1 }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
              {/* Status dot */}
              <circle cx={node.x - 12} cy={node.y - 6} r={2} fill={
                node.status === 'done' ? '#22C55E' : node.status === 'active' ? '#3B82F6' : '#94A3B8'
              } />
              <text x={node.x} y={node.y + 2} textAnchor="middle" fill="#4B5563" fontSize={4.5} fontWeight={600}>
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2 py-1 rounded-md text-xs z-10" style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #D8E0F0', color: '#6B7280' }}>
        <span>3 个节点</span>
        <span className="w-px h-3" style={{ background: '#D8E0F0' }} />
        <span>2 条连线</span>
      </div>
    </div>
  );
}
