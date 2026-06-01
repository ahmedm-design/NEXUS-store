import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, ArrowRight, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function QuickViewModal({ product, onClose }) {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const { theme } = useTheme()

  if (!product) return null

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(3,3,8,0.88)', backdropFilter: 'blur(24px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          onClick={e => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: 640, width: '100%', borderRadius: 18, overflow: 'hidden',
            borderColor: `${product.color}33`,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Image */}
            <div style={{ flex: '1 1 260px', aspectRatio: '1', minHeight: 300, background: '#0a0a18', position: 'relative', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, ${product.color}22, transparent 60%)` }} />
            </div>
            {/* Content */}
            <div style={{ flex: 1, minWidth: 260, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="tag-badge" style={{ color: product.color, borderColor: `${product.color}44`, background: `${product.color}14` }}>
                  {product.tag}
                </span>
                <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b6b8a', cursor: 'pointer', padding: 4, transition: 'color 0.2s' }}>
                  <X size={18} />
                </button>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#6b6b8a', fontFamily: 'Space Mono', letterSpacing: '0.12em', marginBottom: 6, textTransform: 'uppercase' }}>{product.category}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 22, color: '#e8e4ff', lineHeight: 1.2 }}>{product.name}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < Math.floor(product.rating) ? '#fbbf24' : 'transparent'} color={i < Math.floor(product.rating) ? '#fbbf24' : '#333'} />
                ))}
                <span style={{ fontSize: 11, color: '#6b6b8a', fontFamily: 'Space Mono' }}>{product.rating} · {product.reviews} reviews</span>
              </div>
              <p style={{ fontSize: 13, color: '#7b7b9a', lineHeight: 1.65, flex: 1 }}>
                {product.description.slice(0, 130)}...
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 28, color: product.color }}>EGP {product.price.toLocaleString()}</span>
                <span style={{ fontSize: 13, color: '#6b6b8a', textDecoration: 'line-through' }}>EGP {product.originalPrice.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAdd}
                  className="neon-btn"
                  style={{
                    padding: '12px', fontSize: 11, letterSpacing: '0.12em', borderRadius: 8,
                    background: added ? 'linear-gradient(135deg,#4ade80,#22c55e)' : theme.btnGrad,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: added ? '0 0 24px rgba(74,222,128,0.4)' : `0 0 24px ${theme.accent}40`,
                  }}
                >
                  {added ? '✓ ADDED TO CART' : <><ShoppingBag size={14} /> ADD TO CART</>}
                </motion.button>
                <Link to={`/products/${product.id}`} onClick={onClose} style={{ textDecoration: 'none' }}>
                  <button className="ghost-btn" style={{ width: '100%', padding: '10px', fontSize: 11, letterSpacing: '0.12em', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    FULL DETAILS <ArrowRight size={13} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
