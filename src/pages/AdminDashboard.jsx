import React, { useState } from 'react'
import { LayoutDashboard, ShoppingBag, Users, Settings, Wrench, Shield, ArrowLeft } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 80,
      background: theme.bg,
      color: theme.text,
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.4s ease',
    }}>
      
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        
        {/* Sidebar */}
        <div style={{
          width: '100%',
          flex: '1 1 250px',
          maxWidth: 300,
          background: theme.surface,
          borderRight: `1px solid ${theme.border}`,
          padding: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          transition: 'all 0.4s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 30 }}>
            <div style={{
              background: 'rgba(192, 132, 252, 0.15)',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              width: 36,
              height: 36,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield size={18} style={{ color: '#c084fc' }} />
            </div>
            <h2 className="font-syne" style={{ fontSize: 24, fontWeight: 800 }}>Admin Panel</h2>
          </div>

          {[
            { id: 'dashboard', icon: <LayoutDashboard size={16} />, label: 'Overview' },
            { id: 'products', icon: <ShoppingBag size={16} />, label: 'Products' },
            { id: 'orders', icon: <ShoppingBag size={16} />, label: 'Orders' },
            { id: 'users', icon: <Users size={16} />, label: 'Users' },
            { id: 'settings', icon: <Settings size={16} />, label: 'Settings' },
          ].map(t => (
            <button 
              key={t.id} 
              onClick={() => setActiveTab(t.id)} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12, 
                padding: '14px 20px', 
                background: activeTab === t.id ? theme.accent : 'transparent', 
                color: activeTab === t.id ? theme.bg : theme.text, 
                border: 'none', 
                borderRadius: 10, 
                cursor: 'pointer', 
                fontWeight: 700, 
                fontFamily: 'Syne',
                transition: 'all 0.25s', 
                textAlign: 'left' 
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}

          <div style={{ height: '1px', background: theme.border, margin: '20px 0' }} />

          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 16px',
              background: 'transparent',
              border: `1px solid ${theme.border}`,
              color: theme.textMuted,
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 700,
              fontFamily: 'Syne',
              fontSize: 13,
              transition: 'all 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.color=theme.text} onMouseLeave={e => e.currentTarget.style.color=theme.textMuted}>
              <ArrowLeft size={14} /> Back to Account
            </button>
          </Link>
        </div>

        {/* Content Panel */}
        <div style={{ flex: '3 1 600px', padding: 'clamp(24px, 5vw, 50px)', overflowX: 'auto' }}>
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="font-syne" style={{ fontSize: 32, fontWeight: 800, marginBottom: 30 }}>Overview</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
                {[
                  { label: 'Total Sales', value: 'EGP 1,225,000' },
                  { label: 'Total Orders', value: '1,240' },
                  { label: 'Total Users', value: '8,430' },
                  { label: 'Active Products', value: '142' }
                ].map(s => (
                  <div key={s.label} style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: 24, borderRadius: 20, boxShadow: theme.shadow, transition: 'all 0.4s ease' }}>
                    <div style={{ color: theme.textMuted, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Space Mono', marginBottom: 8 }}>{s.label}</div>
                    <div style={{ fontSize: 30, fontWeight: 800, fontFamily: 'Space Mono', color: theme.accent }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Data Table */}
              <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: 30, borderRadius: 24, boxShadow: theme.shadow, overflowX: 'auto', transition: 'all 0.4s ease' }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, fontFamily: 'Syne' }}>Recent Orders</h3>
                
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: 600 }}>
                  <thead>
                    <tr style={{ color: theme.textMuted, borderBottom: `1px solid ${theme.border}`, fontSize: 12, fontFamily: 'Space Mono' }}>
                      <th style={{ padding: '16px 0' }}>ORDER ID</th>
                      <th>CUSTOMER</th>
                      <th>DATE</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map(i => (
                      <tr key={i} style={{ borderBottom: `1px solid ${theme.border}`, fontSize: 14, fontFamily: 'Syne', transition: 'background-color 0.2s' }} className="table-row-hover">
                        <td style={{ padding: '18px 0', fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent }}>#NX-{9043 + i}</td>
                        <td style={{ fontWeight: 600 }}>Jane Smith</td>
                        <td style={{ color: theme.textMuted, fontFamily: 'Space Mono', fontSize: 13 }}>May {i}, 2026</td>
                        <td style={{ fontWeight: 800, fontFamily: 'Space Mono' }}>${(120 * i).toLocaleString()}</td>
                        <td>
                          <span style={{ 
                            background: 'rgba(74,222,128,0.15)', 
                            border: '1px solid rgba(74,222,128,0.3)', 
                            color: '#4ade80', 
                            padding: '4px 12px', 
                            borderRadius: 20, 
                            fontSize: 11, 
                            fontWeight: 700, 
                            fontFamily: 'Space Mono' 
                          }}>COMPLETED</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab !== 'dashboard' && (
            <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: '60px 40px', borderRadius: 24, boxShadow: theme.shadow, textAlign: 'center', color: theme.textMuted, transition: 'all 0.4s ease' }}>
              <Wrench size={48} style={{ opacity: 0.15, marginBottom: 20, color: theme.accent, display: 'inline-block' }} />
              <h2 style={{ fontSize: 24, color: theme.text, marginBottom: 10, fontFamily: 'Syne', fontWeight: 800 }}>Module Under Construction</h2>
              <p style={{ maxWidth: 300, margin: '0 auto', fontSize: 14 }}>The {activeTab} management panel is currently undergoing scheduled maintenance.</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  )
}
