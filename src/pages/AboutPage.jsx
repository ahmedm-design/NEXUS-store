import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Award, Compass, Eye, Heart } from 'lucide-react'

export default function AboutPage() {
  const { theme } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      color: theme.text,
      transition: 'all 0.4s ease',
      paddingBottom: 100
    }}>
      {/* Hero */}
      <section style={{ height: '65vh', minHeight: 500, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} alt="Heritage" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,3,8,0.4) 0%, rgba(3,3,8,0.7) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, display: 'block', fontFamily: 'Space Mono', color: theme.accent, fontWeight: 700 }}>OUR HERITAGE</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-syne" style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, lineHeight: 1.1 }}>Our Story</motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '120px clamp(20px, 5vw, 60px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', padding: 12, borderRadius: '50%', background: theme.surface, border: `1px solid ${theme.border}`, marginBottom: 30, color: theme.accent }}>
          <Compass size={24} />
        </div>
        <h2 className="font-syne" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 40, lineHeight: 1.3, color: theme.text }}>
          "True luxury is not just what you wear. <br/> It is <span style={{
            background: theme.btnGrad,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
            fontWeight: 700
          }}>how it was made</span>."
        </h2>
        <p style={{ fontSize: 17, color: theme.textMuted, lineHeight: 1.8, maxWidth: 740, margin: '0 auto' }}>
          Founded in Cairo in 2026, we set out with a simple mission: to fuse contemporary luxury with the grand heritage of Egyptian craftsmanship. We curate the finest selection of premium bags and accessories, celebrating the artistry of local tanners and weavers to elevate your entire aesthetic.
        </p>
      </section>

      {/* Values Grid splits */}
      <section style={{ padding: '0 clamp(20px, 5vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Split 1 */}
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap', alignItems: 'center', marginBottom: 120 }}>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow
            }}>
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&q=80" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} alt="Materials" />
            </div>
            <div style={{
              position: 'absolute',
              top: -20,
              right: -20,
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              padding: 16,
              borderRadius: 16,
              boxShadow: theme.shadow,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }} className="hidden-mobile">
              <Award size={20} style={{ color: theme.accent }} />
              <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Space Mono' }}>Artisan Certified</span>
            </div>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.accent, marginBottom: 15, display: 'block', fontFamily: 'Space Mono', fontWeight: 700 }}>01 / THE MATERIALS</span>
            <h3 className="font-syne" style={{ fontSize: 36, fontWeight: 800, marginBottom: 24, color: theme.text }}>Uncompromising Quality</h3>
            <p style={{ fontSize: 16, color: theme.textMuted, lineHeight: 1.8 }}>
              We partner with masterful local tanners and Cairo heritage ateliers to source materials of the highest caliber—from full-grain premium leathers to luxury hand-loomed Egyptian cotton canvas. Every piece in our collection undergoes rigorous checks to bring you unparalleled craftsmanship.
            </p>
          </div>
        </div>

        {/* Split 2 */}
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap-reverse', alignItems: 'center', marginBottom: 120 }}>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.accent, marginBottom: 15, display: 'block', fontFamily: 'Space Mono', fontWeight: 700 }}>02 / THE PROCESS</span>
            <h3 className="font-syne" style={{ fontSize: 36, fontWeight: 800, marginBottom: 24, color: theme.text }}>Sustainable By Design</h3>
            <p style={{ fontSize: 16, color: theme.textMuted, lineHeight: 1.8 }}>
              We believe in slow fashion. By rejecting seasonal trends and focusing on timeless silhouettes, our pieces are designed to become modern heirlooms. We bypass traditional retail markups to bring you ethical luxury at an accessible price point.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow
            }}>
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1000&q=80" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} alt="Sustainable" />
            </div>
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: -20,
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              padding: 16,
              borderRadius: 16,
              boxShadow: theme.shadow,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }} className="hidden-mobile">
              <Heart size={20} style={{ color: theme.accent }} />
              <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Space Mono' }}>Ethically Sourced</span>
            </div>
          </div>
        </div>

      </section>

      {/* Call to action */}
      <section style={{ textAlign: 'center', padding: '100px 20px', background: theme.surface, borderTop: `1px solid ${theme.border}`, transition: 'all 0.4s ease' }}>
        <h2 className="font-syne" style={{ fontSize: 32, fontWeight: 800, marginBottom: 30, color: theme.text }}>Experience the Collection</h2>
        <Link to="/products">
          <button className="btn-solid" style={{ background: theme.accent, borderColor: theme.accent, color: theme.bg, boxShadow: `0 8px 24px ${theme.accent}20` }}>Shop Now</button>
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}
