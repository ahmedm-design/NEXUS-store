import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, ShoppingBag, Eye, Award, Sparkles, TrendingUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import productsData from '../data/products.json'

const ALL_PRODUCTS = productsData.products

// 1. HERO SECTION
function HeroSection() {
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, 160])
  const y2 = useTransform(scrollY, [0, 800], [0, -80])

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: 100,
      paddingBottom: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.bg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.4s ease',
    }}>
      
      {/* Decorative Radial Glowing Blobs */}
      <motion.div style={{
        position: 'absolute',
        top: -150,
        right: -150,
        width: '65vw',
        height: '65vw',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.glow} 0%, transparent 65%)`,
        y: y2,
        pointerEvents: 'none',
      }} />
      <motion.div style={{
        position: 'absolute',
        bottom: -150,
        left: -150,
        width: '45vw',
        height: '45vw',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.glow} 0%, transparent 65%)`,
        y: y1,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '6vw', padding: '0 clamp(20px, 5vw, 80px)', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: '1 1 500px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: theme.accent, borderBottom: `2px solid ${theme.accent}`, paddingBottom: 6 }}>The Fall Collection</span>
            <Sparkles size={14} style={{ color: theme.accent }} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 1 }}
            className="font-syne" 
            style={{ fontSize: 'clamp(38px, 6vw, 80px)', fontWeight: 800, lineHeight: 1.05, color: theme.text, letterSpacing: '-0.03em' }}
          >
            Redefining <span style={{
              background: theme.btnGrad,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block',
              fontStyle: 'italic',
              fontWeight: 800
            }}>Luxury.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.7, marginTop: 24, marginBottom: 36, color: theme.textMuted, maxWidth: 500 }}
          >
            Discover the season's most coveted bags and accessories, engineered for the modern visionary and hand-crafted to perfection.
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <Link to="/products">
              <button className="btn-solid" style={{
                background: theme.accent,
                borderColor: theme.accent,
                color: theme.bg,
                padding: '16px 40px',
                fontSize: 14,
                boxShadow: `0 8px 30px ${theme.accent}30`
              }}>Explore Collection <ArrowRight size={18} /></button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div style={{
            width: '100%',
            maxWidth: 450,
            aspectRatio: '3/4',
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: theme.shadow,
            border: `1px solid ${theme.glassBorder}`
          }} className="shimmer-glow">
            <motion.img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80" 
              alt="Luxury Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 1.2 }} 
            />
            {/* Visual bottom glass panel overlays */}
            <div style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              padding: '16px 20px',
              borderRadius: 16,
              background: theme.glassBg,
              border: `1px solid ${theme.glassBorder}`,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: 'Space Mono', color: theme.accent, fontWeight: 700 }}>LIMITED RELEASE</div>
                <div style={{ fontSize: 14, fontFamily: 'Syne', fontWeight: 700, color: theme.text, marginTop: 2 }}>Classic Leather Tote</div>
              </div>
              <div style={{ fontSize: 15, fontFamily: 'Space Mono', fontWeight: 700, color: theme.accent }}>EGP 14,000</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden-mobile" style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'bounce 2s infinite' }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, color: theme.textMuted, marginBottom: 10, fontFamily: 'Space Mono' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />
      </div>
      <style>{`@keyframes bounce { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 10px); } }`}</style>
    </section>
  )
}

// 2. BRANDS
function BrandsSection() {
  const { theme } = useTheme()
  const brands = ['CHANEL', 'PRADA', 'GUCCI', 'HERMÈS', 'DIOR', 'SAINT LAURENT']
  return (
    <section style={{ padding: '60px 0', borderBottom: `1px solid ${theme.border}`, background: theme.surface, transition: 'all 0.4s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '30px 50px', maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
        {brands.map((b, i) => (
          <motion.span 
            key={i} 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 0.6, y: 0 }} 
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ delay: i * 0.05, duration: 0.3 }} 
            viewport={{ once: true }}
            className="font-syne" 
            style={{ fontSize: 'clamp(18px, 3.5vw, 24px)', fontWeight: 700, color: theme.text, letterSpacing: '0.08em', cursor: 'default' }}
          >
            {b}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

// 3. EDITORIAL CATEGORY GRID
function CategoryGridSection() {
  const { theme } = useTheme()
  const navigate = useNavigate()
  return (
    <section style={{ padding: '120px clamp(20px, 5vw, 80px)', background: theme.bg, transition: 'background 0.4s ease' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="font-syne" 
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: theme.text }}
          >
            Curated <br/>
            <span style={{ color: theme.textMuted, fontStyle: 'italic', fontWeight: 600 }}>For You</span>
          </motion.h2>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/products" style={{
              textDecoration: 'none',
              color: theme.accent,
              fontWeight: 700,
              borderBottom: `2px solid ${theme.accent}`,
              paddingBottom: 4,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: 13,
              fontFamily: 'Space Mono'
            }}>Shop All Categories</Link>
          </motion.div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            onClick={() => navigate('/products', { state: { category: 'Handbags' } })} 
            style={{ cursor: 'pointer' }} 
            className="cat-card-new"
          >
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: 20, background: theme.surface, borderRadius: 20, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }} className="shimmer-glow">
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)' }} className="cat-img-new" />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.accent, marginBottom: 8, display: 'block', fontFamily: 'Space Mono' }}>Iconic Silhouettes</span>
            <h3 className="font-syne" style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: theme.text }}>Handbags</h3>
            <div className="cat-link-new" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.text, transition: 'gap 0.3s', fontFamily: 'Space Mono' }}>
              Discover <ArrowRight size={14} style={{ color: theme.accent }} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.15 }} 
            onClick={() => navigate('/products', { state: { category: 'Sunglasses' } })} 
            style={{ cursor: 'pointer' }} 
            className="cat-card-new"
          >
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: 20, background: theme.surface, borderRadius: 20, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }} className="shimmer-glow">
              <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)' }} className="cat-img-new" />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.accent, marginBottom: 8, display: 'block', fontFamily: 'Space Mono' }}>Visionary Eyewear</span>
            <h3 className="font-syne" style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: theme.text }}>Sunglasses</h3>
            <div className="cat-link-new" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.text, transition: 'gap 0.3s', fontFamily: 'Space Mono' }}>
              Shop Now <ArrowRight size={14} style={{ color: theme.accent }} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            onClick={() => navigate('/products', { state: { category: 'Wallets' } })} 
            style={{ cursor: 'pointer' }} 
            className="cat-card-new"
          >
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: 20, background: theme.surface, borderRadius: 20, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }} className="shimmer-glow">
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)' }} className="cat-img-new" />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: theme.accent, marginBottom: 8, display: 'block', fontFamily: 'Space Mono' }}>Everyday Essentials</span>
            <h3 className="font-syne" style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: theme.text }}>Leather Goods</h3>
            <div className="cat-link-new" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.text, transition: 'gap 0.3s', fontFamily: 'Space Mono' }}>
              Shop Now <ArrowRight size={14} style={{ color: theme.accent }} />
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        .cat-card-new:hover .cat-img-new { transform: scale(1.04); }
        .cat-card-new:hover .cat-link-new { gap: 12px; }
      `}</style>
    </section>
  )
}

// 4. DEALS (THE ARCHIVAL EVENT)
function DealsSection() {
  const { theme } = useTheme()
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev
        if (s > 0) s--
        else { s = 59; if (m > 0) m--; else { m = 59; h-- } }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ padding: '120px clamp(20px, 5vw, 80px)', background: theme.surface, borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}`, transition: 'all 0.4s ease' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: '60px 100px', flexWrap: 'wrap', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ flex: '1 1 500px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff4d4f', marginBottom: 15, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Space Mono' }}>
            <TrendingUp size={14} /> Limited Time Event
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, marginBottom: 24, lineHeight: 1.1, color: theme.text }}>
            The Archival <br/>
            <span style={{
              background: 'linear-gradient(135deg,#ff4d4f,#f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
              fontWeight: 700
            }}>Sale Event</span>
          </h2>
          <p style={{ color: theme.textMuted, fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: 1.7, marginBottom: 44, maxWidth: 480 }}>
            Unlock unprecedented access to rare, retired, and discontinued luxury accessories. Grab the best deals before the vault closes permanently.
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 44 }}>
            {Object.entries(timeLeft).map(([label, val]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  background: theme.bg,
                  border: `1px solid ${theme.border}`,
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  fontWeight: 700,
                  fontFamily: 'Space Mono',
                  color: theme.text,
                  marginBottom: 8,
                  boxShadow: theme.shadow
                }}>
                  {val.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: 10, color: theme.textMuted, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Space Mono' }}>{label}</div>
              </div>
            ))}
          </div>
          <Link to="/products">
            <button className="btn-solid" style={{
              background: 'linear-gradient(135deg,#ff4d4f,#ec4899)',
              borderColor: '#ff4d4f',
              color: '#fff',
              padding: '16px 36px',
              fontSize: 14,
              boxShadow: '0 8px 24px rgba(255, 77, 79, 0.25)'
            }}>Shop The Sale</button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div style={{ width: '100%', maxWidth: 420, aspectRatio: '4/5', background: theme.bg, borderRadius: 24, overflow: 'hidden', boxShadow: theme.shadow, border: `1px solid ${theme.border}`, position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80" alt="Deal Item" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: '#ff4d4f',
              color: '#fff',
              padding: '6px 14px',
              borderRadius: 30,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.1em',
              fontFamily: 'Space Mono',
              boxShadow: '0 4px 12px rgba(255,77,79,0.3)'
            }}>30% OFF</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// 5. FULL BLEED EDITORIAL
function EditorialSection() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80])
  return (
    <section style={{ height: '80vh', minHeight: 600, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <motion.img 
        src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1600&q=80" 
        style={{ position: 'absolute', width: '100%', height: '130%', objectFit: 'cover', y, zIndex: -1 }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,3,8,0.4) 0%, rgba(3,3,8,0.7) 100%)' }} />
      
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 850 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 30, marginBottom: 24 }}>
          <Award size={14} style={{ color: theme.accent }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', fontWeight: 800, fontFamily: 'Space Mono', textTransform: 'uppercase' }}>CRAFTSMANSHIP HERITAGE</span>
        </div>
        <h2 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, marginBottom: 24, lineHeight: 1.1 }}>The Art of Craftsmanship</h2>
        <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.8, marginBottom: 40, opacity: 0.85, fontWeight: 400 }}>
          Every piece in our collection is a testament to uncompromising quality and visionary design. We source only the finest materials from around the globe to create accessories that outlast trends and become modern heirlooms.
        </p>
        <Link to="/about">
          <button className="btn-outline" style={{
            color: '#fff',
            borderColor: '#fff',
            padding: '14px 36px'
          }} onMouseEnter={e => {e.target.style.background='#fff'; e.target.style.color='#000'}} onMouseLeave={e => {e.target.style.background='transparent'; e.target.style.color='#fff'}}>Read Our Story</button>
        </Link>
      </div>
    </section>
  )
}

// 6. CURATED ARRIVALS
function NewArrivals() {
  const { theme } = useTheme()
  const { addToCart } = useCart()
  const tabs = ["Handbags", "Wallets", "Sunglasses", "Backpacks"]
  const [active, setActive] = useState(tabs[0])
  const [addingId, setAddingId] = useState(null)
  const navigate = useNavigate()

  const products = ALL_PRODUCTS.filter(p => p.category === active).slice(0, 4)

  const handleAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    setAddingId(product.id)
    addToCart(product)
    setTimeout(() => setAddingId(null), 1500)
  }

  return (
    <section style={{ padding: '120px clamp(20px, 5vw, 80px)', background: theme.bg, transition: 'background 0.4s ease' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, marginBottom: 28, color: theme.text }}>Curated Arrivals</h2>
          <div style={{ display: 'inline-flex', background: theme.surface, padding: 6, borderRadius: 14, border: `1px solid ${theme.border}`, gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
            {tabs.map(t => (
              <span 
                key={t} 
                onClick={() => setActive(t)} 
                style={{ 
                  fontSize: 14, 
                  fontWeight: 700, 
                  color: active === t ? theme.accent : theme.textMuted, 
                  cursor: 'pointer', 
                  borderRadius: 10,
                  padding: '10px 24px', 
                  background: active === t ? theme.bg : 'transparent',
                  border: active === t ? `1px solid ${theme.border}` : '1px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  fontFamily: 'Syne'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div 
          key={active} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}
        >
          {products.map(p => (
            <motion.div 
              key={p.id} 
              onClick={() => navigate(`/products/${p.id}`)} 
              whileHover={{ y: -6 }}
              style={{
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                background: theme.surface,
                borderRadius: 20,
                padding: 16,
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                transition: 'all 0.4s ease',
                position: 'relative'
              }}
              className="arrival-card"
            >
              <div style={{ width: '100%', aspectRatio: '1', background: theme.bg, borderRadius: 14, overflow: 'hidden', marginBottom: 16, position: 'relative' }} className="shimmer-glow">
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)' }} className="product-img" />
                
                {/* Overlay Action Panel */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="card-hover-overlay">
                  <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleAdd(e, p)}
                    style={{
                      background: theme.accent,
                      color: theme.bg,
                      border: 'none',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 16px ${theme.accent}40`,
                    }}
                  >
                    {addingId === p.id ? '✓' : <ShoppingBag size={18} />}
                  </motion.button>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: theme.accent, fontFamily: 'Space Mono', fontWeight: 700, textTransform: 'uppercase' }}>{p.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Star size={11} fill="#fbbf24" color="#fbbf24" />
                  <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'Space Mono', color: theme.textMuted }}>{p.rating}</span>
                </div>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: theme.text, fontFamily: 'Syne', lineHeight: 1.3 }}>{p.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 'auto' }}>
                <div style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Mono', color: theme.accent }}>EGP {p.price.toLocaleString()}</div>
                {p.originalPrice && <div style={{ fontSize: 12, textDecoration: 'line-through', color: theme.textMuted, fontFamily: 'Space Mono' }}>EGP {p.originalPrice.toLocaleString()}</div>}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <Link to="/products">
            <button className="btn-outline" style={{
              color: theme.text,
              borderColor: theme.border,
              padding: '16px 40px',
              fontSize: 14
            }}>View Entire Collection</button>
          </Link>
        </div>
      </div>
      <style>{`
        .arrival-card:hover .product-img { transform: scale(1.05); }
        .arrival-card:hover .card-hover-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  )
}

// 7. TESTIMONIALS
function TestimonialsSection() {
  const { theme } = useTheme()
  return (
    <section style={{ padding: '100px clamp(20px, 5vw, 80px) 120px', background: theme.surface, borderTop: `1px solid ${theme.border}`, transition: 'all 0.4s ease' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, marginBottom: 60, textAlign: 'center', color: theme.text }}>Words from our Clients</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {[
            { name: "Farida A.", text: "The quilted shoulder bag exceeded every expectation. The leather is buttery soft and the hardware feels incredibly premium." },
            { name: "Yasmin M.", text: "A truly luxurious experience from unboxing to everyday wear. The compliments haven't stopped since I started wearing my aviators." },
            { name: "Mariam K.", text: "I've purchased designer bags that cost triple what this did, and the quality here is undeniably superior. An absolute masterpiece." }
          ].map((t, i) => (
            <div 
              key={i} 
              style={{
                background: theme.bg,
                padding: '40px 32px',
                borderRadius: 20,
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill={theme.accent} color={theme.accent} />)}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: theme.textMuted, marginBottom: 24, fontStyle: 'italic', flex: 1 }}>"{t.text}"</p>
              <h4 style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Mono', color: theme.text }}>{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 8. NEWSLETTER (JOIN INNER CIRCLE)
function NewsletterSection() {
  const { theme } = useTheme()
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section style={{ padding: '0 clamp(20px, 5vw, 80px)', background: theme.bg, marginBottom: 120, marginTop: 40, transition: 'background 0.4s ease' }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        background: theme.surface,
        borderRadius: 28,
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        border: `1px solid ${theme.border}`,
        boxShadow: theme.shadow
      }}>
        <div style={{ flex: '1 1 500px', padding: 'clamp(40px, 8vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="font-syne" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: theme.text, marginBottom: 20 }}>Join The Inner Circle</h2>
          <p style={{ color: theme.textMuted, fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>
            Subscribe to receive insider access to new collections, exclusive archival sales, and global style inspiration.
          </p>
          {subscribed ? (
            <div style={{ color: '#4ade80', fontFamily: 'Space Mono', fontSize: 14, fontWeight: 700 }}>
              ✓ You are now subscribed to the inner circle!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                style={{
                  flex: 1,
                  minWidth: 250,
                  padding: '16px 20px',
                  borderRadius: 10,
                  border: `1px solid ${theme.border}`,
                  background: theme.bg,
                  color: theme.text,
                  fontSize: 15,
                  outline: 'none',
                  transition: 'all 0.3s'
                }} 
              />
              <button 
                type="submit"
                style={{
                  background: theme.accent,
                  color: theme.bg,
                  border: 'none',
                  padding: '0 32px',
                  borderRadius: 10,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'all 0.2s',
                  fontSize: 14,
                  fontFamily: 'Syne',
                  height: 54,
                  boxShadow: `0 4px 12px ${theme.accent}20`
                }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
        <div style={{ flex: 1, minHeight: 400, position: 'relative' }} className="hidden-mobile">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000&q=80" alt="Newsletter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${theme.surface} 0%, transparent 100%)` }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <BrandsSection />
      <CategoryGridSection />
      <DealsSection />
      <EditorialSection />
      <NewArrivals />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}
