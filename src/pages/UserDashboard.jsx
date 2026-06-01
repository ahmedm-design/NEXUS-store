import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Package, User, Settings, LogOut, ArrowRight, Shield } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function UserDashboard() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('orders')
  const navigate = useNavigate()
  const [email] = useState(() => {
    return localStorage.getItem('nexus_user_email') || 'john.doe@example.com'
  })

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 120,
      background: theme.bg,
      color: theme.text,
      transition: 'all 0.4s ease',
      paddingBottom: 100
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        <h1 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, marginBottom: 40, letterSpacing: '-0.02em' }}>My Account</h1>

        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <div style={{
            flex: '1 1 280px',
            background: theme.surface,
            borderRadius: 24,
            padding: 24,
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow,
            transition: 'all 0.4s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, paddingBottom: 24, borderBottom: `1px solid ${theme.border}`, marginBottom: 20 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: theme.accent,
                color: theme.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 800,
                fontFamily: 'Space Mono',
                boxShadow: `0 4px 10px ${theme.accent}30`
              }}>
                JD
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, fontFamily: 'Syne' }}>John Doe</div>
                <div style={{ color: theme.textMuted, fontSize: 13, fontFamily: 'Space Mono' }}>{email}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { id: 'orders', icon: <Package size={16} />, label: 'My Orders' },
                { id: 'profile', icon: <User size={16} />, label: 'Profile Details' },
                { id: 'settings', icon: <Settings size={16} />, label: 'Settings' },
              ].map(t => (
                <button 
                  key={t.id} 
                  onClick={() => setActiveTab(t.id)} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 12, 
                    padding: '12px 16px', 
                    background: activeTab === t.id ? theme.bg : 'transparent', 
                    border: activeTab === t.id ? `1px solid ${theme.border}` : '1px solid transparent', 
                    borderRadius: 10, 
                    cursor: 'pointer', 
                    color: activeTab === t.id ? theme.accent : theme.text, 
                    fontWeight: 700, 
                    fontFamily: 'Syne',
                    textAlign: 'left', 
                    transition: 'all 0.25s' 
                  }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
              
              <div style={{ height: '1px', background: theme.border, margin: '12px 0' }} />

              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  width: '100%',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  padding: '12px 16px', 
                  background: 'rgba(192, 132, 252, 0.05)', 
                  border: `1px solid rgba(192, 132, 252, 0.15)`, 
                  borderRadius: 10, 
                  cursor: 'pointer', 
                  color: '#c084fc', 
                  fontWeight: 700, 
                  fontFamily: 'Syne',
                  textAlign: 'left', 
                  transition: 'all 0.2s' 
                }}>
                  <Shield size={16} /> Admin Panel
                </button>
              </Link>
              
              <button 
                onClick={() => {
                  localStorage.removeItem('nexus_logged_in')
                  localStorage.removeItem('nexus_user_email')
                  navigate('/')
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  padding: '12px 16px', 
                  background: 'transparent', 
                  border: 'none', 
                  borderRadius: 10, 
                  cursor: 'pointer', 
                  color: '#ef4444', 
                  fontWeight: 700, 
                  fontFamily: 'Syne',
                  textAlign: 'left', 
                  marginTop: 12 
                }}
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>

          {/* Content Pane */}
          <div style={{
            flex: '1 1 600px',
            background: theme.surface,
            borderRadius: 24,
            padding: 'clamp(24px, 5vw, 40px)',
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow,
            transition: 'all 0.4s ease'
          }}>
            {activeTab === 'orders' && (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 30, fontFamily: 'Syne' }}>Recent Orders</h3>
                {[1, 2].map(i => (
                  <div key={i} style={{ border: `1px solid ${theme.border}`, borderRadius: 16, padding: 24, marginBottom: 20, background: theme.bg }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}`, paddingBottom: 15, marginBottom: 15, flexWrap: 'wrap', gap: 10 }}>
                      <div>
                        <div style={{ fontSize: 11, color: theme.textMuted, fontFamily: 'Space Mono' }}>Order ID: #NX-{84930 + i}</div>
                        <div style={{ fontWeight: 700, marginTop: 4, fontFamily: 'Syne' }}>Placed on May {i + 1}, 2026</div>
                      </div>
                      <div style={{ background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: 'Space Mono' }}>DELIVERED</div>
                    </div>
                    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ width: 64, height: 64, background: theme.surface, borderRadius: 10, overflow: 'hidden', border: `1px solid ${theme.border}` }}>
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&q=80" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontFamily: 'Syne' }}>Classic Leather Tote</div>
                        <div style={{ color: theme.textMuted, fontSize: 13, marginTop: 4, fontFamily: 'Space Mono' }}>Qty: 1</div>
                      </div>
                      <div style={{ marginLeft: 'auto', fontWeight: 800, fontFamily: 'Space Mono', color: theme.accent, fontSize: 16 }}>EGP 14,000</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 30, fontFamily: 'Syne' }}>Profile Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>First Name</label>
                    <input 
                      type="text" 
                      defaultValue="John" 
                      style={{ 
                        width: '100%', 
                        padding: 14, 
                        background: theme.bg, 
                        border: `1px solid ${theme.border}`, 
                        borderRadius: 10, 
                        color: theme.text, 
                        fontSize: 15, 
                        outline: 'none' 
                      }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Doe" 
                      style={{ 
                        width: '100%', 
                        padding: 14, 
                        background: theme.bg, 
                        border: `1px solid ${theme.border}`, 
                        borderRadius: 10, 
                        color: theme.text, 
                        fontSize: 15, 
                        outline: 'none' 
                      }} 
                    />
                  </div>
                  <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="john.doe@example.com" 
                      style={{ 
                        width: '100%', 
                        padding: 14, 
                        background: theme.bg, 
                        border: `1px solid ${theme.border}`, 
                        borderRadius: 10, 
                        color: theme.text, 
                        fontSize: 15, 
                        outline: 'none' 
                      }} 
                    />
                  </div>
                </div>
                <button className="btn-solid" style={{ marginTop: 30, background: theme.accent, borderColor: theme.accent, color: theme.bg }}>Save Changes</button>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 30, fontFamily: 'Syne' }}>Settings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: `1px solid ${theme.border}` }}>
                    <div>
                      <div style={{ fontWeight: 700, fontFamily: 'Syne' }}>Email Notifications</div>
                      <div style={{ fontSize: 13, color: theme.textMuted }}>Receive updates on your orders and shipping status</div>
                    </div>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: theme.accent, cursor: 'pointer' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: `1px solid ${theme.border}` }}>
                    <div>
                      <div style={{ fontWeight: 700, fontFamily: 'Syne' }}>Concierge Offers</div>
                      <div style={{ fontSize: 13, color: theme.textMuted }}>Receive latest archival releases and boutique items</div>
                    </div>
                    <input type="checkbox" style={{ width: 18, height: 18, accentColor: theme.accent, cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
