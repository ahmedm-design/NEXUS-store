import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer style={{
      background: theme.surface,
      borderTop: `1px solid ${theme.border}`,
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px) 40px',
      color: theme.text,
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px 40px', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '2 1 350px', paddingRight: 40 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'currentColor' }}>
            <span className="font-syne" style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.04em', display: 'block', marginBottom: 20 }}>
              NEXUS <span style={{ fontWeight: 400, color: theme.accent, fontStyle: 'italic' }}>CAIRO</span>
            </span>
          </Link>
          <p style={{ color: theme.textMuted, lineHeight: 1.7, maxWidth: 320, marginBottom: 30, fontSize: 15 }}>
            Discover the perfect accessory to elevate your style. We offer the finest selection of luxury bags, sunglasses, and leather goods crafted for the modern visionary.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Instagram', 'Twitter', 'Pinterest'].map(social => (
              <span
                key={social}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.text,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = theme.accent}
                onMouseLeave={e => e.target.style.color = theme.text}
              >
                {social}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 25, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Mono', color: theme.accent }}>About Us</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/about" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Our Story</Link>
            <Link to="/contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Contact</Link>
            <Link to="/about" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Careers</Link>
            <Link to="/about" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Journal</Link>
          </div>
        </div>

        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 25, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Mono', color: theme.accent }}>Collection</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/products" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Handbags</Link>
            <Link to="/products" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Wallets</Link>
            <Link to="/products" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Sunglasses</Link>
            <Link to="/products" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Accessories</Link>
          </div>
        </div>

        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 25, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Mono', color: theme.accent }}>Support</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>FAQ</Link>
            <Link to="/contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Shipping Info</Link>
            <Link to="/contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Returns</Link>
            <Link to="/contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Warranty</Link>
          </div>
        </div>
      </div>
      
      <div style={{
        maxWidth: 1200,
        margin: '60px auto 0',
        borderTop: `1px solid ${theme.border}`,
        paddingTop: 30,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
        color: theme.textMuted,
        fontSize: 13,
      }}>
        <span>© 2026 NEXUS CAIRO. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 30 }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'currentColor', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Privacy Policy</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'currentColor', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Terms of Service</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'currentColor', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Accessibility</Link>
        </div>
      </div>
    </footer>
  )
}
