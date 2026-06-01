import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Filter, X, SlidersHorizontal } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import ProductCard from '../components/ProductCard'
import QuickViewModal from '../components/QuickViewModal'
import productsData from '../data/products.json'

const ALL_PRODUCTS = productsData.products
const CATEGORIES = ['All', 'Handbags', 'Wallets', 'Sunglasses', 'Backpacks', 'Accessories']

export default function ProductsPage() {
  const { theme } = useTheme()
  const location = useLocation()
  const [category, setCategory] = useState('All')
  const [priceMax, setPriceMax] = useState(30000)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.state?.category) {
      setCategory(location.state.category)
    }
  }, [location.state])

  const filtered = ALL_PRODUCTS
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.price <= priceMax)

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 80,
      background: theme.bg,
      color: theme.text,
      transition: 'all 0.4s ease',
    }}>
      
      {/* Header Banner */}
      <div style={{
        background: theme.surface,
        padding: '80px 24px',
        textAlign: 'center',
        marginBottom: 48,
        borderBottom: `1px solid ${theme.border}`,
        transition: 'all 0.4s ease',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative background blob */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.glow} 0%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="font-syne" style={{ fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>The Collection</h1>
          <p style={{ color: theme.textMuted, maxWidth: 640, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>
            Discover our exclusive range of luxury bags and accessories, crafted with precision and elegance for the modern individual. Elevate your everyday.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px, 5vw, 60px)' }}>
        
        {/* Mobile Filter Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
          background: theme.surface,
          padding: '16px 20px',
          borderRadius: 16,
          border: `1px solid ${theme.border}`,
          boxShadow: theme.shadow
        }} className="show-mobile-flex">
          <div style={{ fontWeight: 700, fontFamily: 'Space Mono', fontSize: 13, color: theme.accent }}>{filtered.length} PRODUCTS</div>
          <button 
            onClick={() => setMobileFilterOpen(true)} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: theme.accent,
              color: theme.bg,
              border: 'none',
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.05em',
              fontFamily: 'Space Mono',
              boxShadow: `0 4px 12px ${theme.accent}30`,
              cursor: 'pointer'
            }}
          >
            <Filter size={13} /> FILTERS
          </button>
        </div>

        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <div 
            className={`filter-sidebar ${mobileFilterOpen ? 'open' : ''}`} 
            style={{
              flex: '0 0 260px',
              background: theme.surface,
              borderRadius: 20,
              padding: 24,
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
              transition: 'all 0.3s ease',
              position: 'sticky',
              top: 104,
              zIndex: 100
            }}
          >
            <div className="filter-header show-mobile-flex" style={{ display: 'none', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Syne' }}>Filters</span>
              <X size={20} onClick={() => setMobileFilterOpen(false)} style={{ cursor: 'pointer', color: theme.textMuted }} />
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: 36 }}>
              <h4 style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 20,
                color: theme.accent,
                fontFamily: 'Space Mono',
                borderBottom: `1px solid ${theme.border}`,
                paddingBottom: 10
              }}>Categories</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {CATEGORIES.map(c => (
                  <label key={c} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    cursor: 'pointer',
                    fontSize: 14,
                    color: category === c ? theme.text : theme.textMuted,
                    fontWeight: category === c ? 700 : 500,
                    fontFamily: 'Syne',
                    transition: 'color 0.2s'
                  }}>
                    <input 
                      type="radio" 
                      name="cat" 
                      checked={category === c} 
                      onChange={() => { setCategory(c); setMobileFilterOpen(false) }} 
                      style={{
                        accentColor: theme.accent,
                        cursor: 'pointer'
                      }} 
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 20,
                color: theme.accent,
                fontFamily: 'Space Mono',
                borderBottom: `1px solid ${theme.border}`,
                paddingBottom: 10
              }}>Max Price</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontSize: 12, color: theme.textMuted, fontFamily: 'Space Mono' }}>EGP 1k</span>
                  <input 
                    type="range" 
                    min={1000} 
                    max={30000} 
                    step={500} 
                    value={priceMax} 
                    onChange={e => setPriceMax(+e.target.value)} 
                    style={{
                      flex: 1,
                      accentColor: theme.accent,
                      cursor: 'pointer',
                      height: 4,
                      borderRadius: 2
                    }} 
                  />
                  <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent }}>EGP {priceMax.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Grid Panel */}
          <div style={{ flex: 1 }}>
            <div className="hidden-mobile" style={{ marginBottom: 24, fontWeight: 700, color: theme.textMuted, fontSize: 12, fontFamily: 'Space Mono', display: 'flex', alignItems: 'center', gap: 8 }}>
              <SlidersHorizontal size={14} style={{ color: theme.accent }} />
              SHOWING {filtered.length} PRODUCTS MATCHING
            </div>
            
            {filtered.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '120px 24px',
                background: theme.surface,
                borderRadius: 20,
                border: `1px solid ${theme.border}`,
                color: theme.textMuted,
                boxShadow: theme.shadow
              }}>
                <Filter size={48} style={{ opacity: 0.15, marginBottom: 20, color: theme.accent, display: 'inline-block' }} />
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Syne', color: theme.text, marginBottom: 8 }}>No Products Found</div>
                <p style={{ fontSize: 14, maxWidth: 320, margin: '0 auto' }}>Try relaxing your category selection or increasing the price filter slider.</p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px 28px',
                paddingBottom: 100
              }}>
                {filtered.map((p, idx) => (
                  <ProductCard 
                    key={p.id} 
                    product={p} 
                    index={idx} 
                    onQuickView={(prod) => setQuickViewProduct(prod)} 
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Quick View Modal Integration */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}

      <style>{`
        .filter-sidebar { transition: all 0.3s ease; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-flex { display: flex !important; }
          .filter-sidebar {
            position: fixed; 
            top: 0; 
            left: -100%; 
            bottom: 0; 
            width: 85vw;
            max-width: 320px;
            background: ${theme.surface}; 
            z-index: 1000; 
            padding: 32px;
            box-shadow: 20px 0 60px rgba(0,0,0,0.6);
            overflow-y: auto;
            border-right: 1px solid ${theme.border};
            border-radius: 0 24px 24px 0;
          }
          .filter-sidebar.open { left: 0; }
        }
        @media (min-width: 901px) {
          .show-mobile-flex { display: none !important; }
        }
      `}</style>
    </div>
  )
}
