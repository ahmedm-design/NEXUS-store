import React from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function CartPage() {
  const { items, cartTotal, clearCart, updateQty, removeItem } = useCart()
  const { theme } = useTheme()
  const shipping = cartTotal > 10000 || cartTotal === 0 ? 0 : 350
  const tax = Math.round(cartTotal * 0.14) // 14% VAT in Egypt
  const grandTotal = cartTotal + tax + shipping

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
        <h1 className="font-syne" style={{ fontSize: 'clamp(36px, 6vw, 48px)', fontWeight: 800, marginBottom: 40, letterSpacing: '-0.02em' }}>Your Cart</h1>

        {items.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            background: theme.surface,
            borderRadius: 24,
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow
          }}>
            <ShoppingBag size={48} style={{ opacity: 0.15, marginBottom: 20, color: theme.accent, display: 'inline-block' }} />
            <p style={{ color: theme.textMuted, fontSize: 16, marginBottom: 30, fontFamily: 'Syne', fontWeight: 600 }}>Your shopping cart is currently empty.</p>
            <Link to="/products">
              <button className="btn-solid" style={{ background: theme.accent, borderColor: theme.accent, color: theme.bg }}>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '40px 60px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Cart Items */}
            <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: theme.surface, borderRadius: 24, padding: '10px 30px', border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                {items.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: 20, alignItems: 'center', padding: '24px 0', borderBottom: `1px solid ${theme.border}`, flexWrap: 'wrap' }}>
                    <div style={{ width: 90, height: 90, background: theme.bg, borderRadius: 12, overflow: 'hidden', border: `1px solid ${theme.border}` }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: theme.text, fontFamily: 'Syne' }}>{item.name}</h3>
                      {item.selectedColor && (
                        <div style={{ color: theme.textMuted, fontSize: 13, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Space Mono' }}>
                          Color: <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: item.selectedColor, border: `1px solid ${theme.border}` }} />
                        </div>
                      )}
                      <div style={{ color: theme.textMuted, fontSize: 13, fontFamily: 'Space Mono' }}>EGP {item.price.toLocaleString()} each</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${theme.border}`, borderRadius: 10, overflow: 'hidden', background: theme.bg }}>
                      <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} style={{ width: 36, height: 40, background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: theme.textMuted }}>−</button>
                      <span style={{ width: 36, textAlign: 'center', fontSize: 15, fontWeight: 700, fontFamily: 'Space Mono', color: theme.text }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 36, height: 40, background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: theme.textMuted }}>+</button>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, width: 90, textAlign: 'right', fontFamily: 'Space Mono', color: theme.accent }}>
                      EGP {(item.price * item.qty).toLocaleString()}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      style={{ background: 'rgba(239,68,68,0.1)', border: 'none', color: '#ef4444', borderRadius: 8, cursor: 'pointer', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background='rgba(239,68,68,0.2)'}
                      onMouseLeave={e => e.currentTarget.style.background='rgba(239,68,68,0.1)'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline" style={{ color: theme.text, borderColor: theme.border, fontSize: 13, padding: '10px 20px' }}>Continue Shopping</button>
                </Link>
                <button onClick={clearCart} className="btn-outline" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)', fontSize: 13, padding: '10px 20px' }}>Clear Cart</button>
              </div>
            </div>

            {/* Order Summary Panel */}
            <div style={{
              flex: '1 1 340px',
              background: theme.surface,
              padding: 36,
              borderRadius: 24,
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
              position: 'sticky',
              top: 100,
              transition: 'all 0.4s ease'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, fontFamily: 'Syne', color: theme.text }}>Order Summary</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, color: theme.textMuted, fontSize: 14, fontFamily: 'Space Mono' }}>
                <span>Subtotal</span>
                <span style={{ color: theme.text, fontWeight: 600 }}>EGP {cartTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, color: theme.textMuted, fontSize: 14, fontFamily: 'Space Mono' }}>
                <span>VAT (14%)</span>
                <span style={{ color: theme.text, fontWeight: 600 }}>EGP {tax.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, color: theme.textMuted, fontSize: 14, fontFamily: 'Space Mono' }}>
                <span>Shipping</span>
                <span style={{ color: shipping === 0 ? '#4ade80' : theme.text, fontWeight: 600 }}>{shipping === 0 ? 'Free' : `EGP ${shipping.toLocaleString()}`}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${theme.border}`, paddingTop: 20, marginBottom: 36, fontSize: 18, fontWeight: 800, fontFamily: 'Syne' }}>
                <span>Total</span>
                <span style={{ color: theme.accent }}>EGP {grandTotal.toLocaleString()}</span>
              </div>

              <Link to="/checkout" style={{ display: 'block', textDecoration: 'none' }}>
                <button className="btn-solid" style={{ width: '100%', padding: '16px', fontSize: 14, background: theme.accent, borderColor: theme.accent, color: theme.bg, boxShadow: `0 8px 24px ${theme.accent}20` }}>
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
