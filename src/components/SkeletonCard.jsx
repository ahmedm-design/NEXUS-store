import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="glass-card" style={{ borderRadius: 14, overflow: 'hidden' }}>
      <div className="skeleton" style={{ height: 230, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: '-100%', width: '60%', height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            animation: 'shimmer 1.8s infinite',
          }} />
        </div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div className="skeleton" style={{ height: 10, width: '40%', borderRadius: 4, marginBottom: 10 }} />
        <div className="skeleton" style={{ height: 16, width: '75%', borderRadius: 4, marginBottom: 14 }} />
        <div className="skeleton" style={{ height: 10, width: '55%', borderRadius: 4, marginBottom: 16 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="skeleton" style={{ height: 22, width: '30%', borderRadius: 4 }} />
          <div className="skeleton" style={{ height: 34, width: '28%', borderRadius: 6 }} />
        </div>
      </div>
    </div>
  )
}
