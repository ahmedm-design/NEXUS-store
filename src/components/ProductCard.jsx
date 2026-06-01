import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Eye, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function ProductCard({ product, index = 0, onQuickView }) {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const { theme } = useTheme()

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickView?.(product)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      style={{ position: 'relative' }}
    >
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <motion.div
          className="glass-card product-card"
          style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }}
          whileHover={{
            borderColor: `${product.color}44`,
            boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 30px ${product.color}18`,
          }}
          transition={{ duration: 0.25 }}
        >
          {/* Image */}
          <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', position: 'relative', background: '#0a0a18' }}>
            <motion.img
              className="product-card-img"
              src={product.image}
              alt={product.name}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(180deg, transparent 30%, ${product.color}22 100%)`,
              }}
            />
            {/* Badges */}
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span className="tag-badge" style={{
                color: product.color,
                borderColor: `${product.color}44`,
                background: `${product.color}18`,
              }}>{product.tag}</span>
            </div>
            <div style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(74,222,128,0.15)',
              border: '1px solid rgba(74,222,128,0.3)',
              color: '#4ade80', fontSize: 10, padding: '3px 8px',
              fontFamily: 'Space Mono', borderRadius: 2,
            }}>
              -{discount}%
            </div>
            {/* Quick action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileHover={{ opacity: 1, y: 0 }}
              style={{
                position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: 8,
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuickView}
                style={{
                  padding: '7px 16px', borderRadius: 4, fontSize: 10,
                  letterSpacing: '0.1em', background: 'rgba(10,10,24,0.9)',
                  border: '1px solid rgba(255,255,255,0.15)', color: '#e8e4ff',
                  cursor: 'pointer', fontFamily: 'Syne', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <Eye size={12} /> QUICK VIEW
              </motion.button>
            </motion.div>
          </div>

          {/* Info */}
          <div style={{ padding: '16px 18px' }}>
            <div style={{ fontSize: 10, color: '#6b6b8a', fontFamily: 'Space Mono', letterSpacing: '0.1em', marginBottom: 5, textTransform: 'uppercase' }}>
              {product.category}
            </div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 15, color: '#e8e4ff', marginBottom: 10, lineHeight: 1.3 }}>
              {product.name}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill={i < Math.floor(product.rating) ? '#fbbf24' : 'transparent'} color={i < Math.floor(product.rating) ? '#fbbf24' : '#333'} />
                ))}
              </div>
              <span style={{ fontSize: 10, color: '#6b6b8a', fontFamily: 'Space Mono' }}>
                {product.rating} ({product.reviews})
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 20, color: product.color }}>
                  EGP {product.price.toLocaleString()}
                </span>
                <span style={{ fontSize: 12, color: '#6b6b8a', textDecoration: 'line-through', marginLeft: 7 }}>
                  EGP {product.originalPrice.toLocaleString()}
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={handleAdd}
                style={{
                  padding: '8px 14px', fontSize: 10, borderRadius: 5, letterSpacing: '0.08em',
                  background: added ? 'linear-gradient(135deg,#4ade80,#22c55e)' : theme.btnGrad,
                  border: 'none', color: '#fff', cursor: 'pointer',
                  fontFamily: 'Syne', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 5,
                  transition: 'background 0.3s',
                  boxShadow: added ? '0 0 16px rgba(74,222,128,0.4)' : `0 0 16px ${theme.accent}40`,
                }}
              >
                {added ? '✓ ADDED' : <><ShoppingBag size={12} /> ADD</>}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
