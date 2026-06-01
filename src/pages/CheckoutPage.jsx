import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import { ArrowLeft, Check, CreditCard, Sparkles } from 'lucide-react'

export default function CheckoutPage() {
  const { cartTotal, items, clearCart } = useCart()
  const { theme } = useTheme()
  const navigate = useNavigate()
  const shipping = cartTotal > 10000 || cartTotal === 0 ? 0 : 350
  const tax = Math.round(cartTotal * 0.14) // 14% VAT in Egypt
  const grandTotal = cartTotal + tax + shipping

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCheckout = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        clearCart()
        navigate('/')
      }, 2500)
    }, 2000)
  }

  if (items.length === 0 && !loading && !success) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 160, background: theme.bg, color: theme.text, textAlign: 'center' }}>
        <h1 className="font-syne" style={{ fontSize: 44, fontWeight: 800, marginBottom: 20 }}>Checkout</h1>
        <p style={{ color: theme.textMuted, fontSize: 16, marginBottom: 30 }}>Your shopping cart is empty.</p>
        <Link to="/products">
          <button className="btn-solid" style={{ background: theme.accent, borderColor: theme.accent, color: theme.bg }}>Continue Shopping</button>
        </Link>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 120,
      background: theme.bg,
      color: theme.text,
      transition: 'all 0.4s ease',
      paddingBottom: 120
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        
        {success ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            background: theme.surface,
            borderRadius: 28,
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow,
            maxWidth: 600,
            margin: '40px auto 0'
          }}>
            <div style={{
              background: 'rgba(74,222,128,0.15)',
              border: '1px solid rgba(74,222,128,0.3)',
              width: 64,
              height: 64,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Check size={32} color="#4ade80" />
            </div>
            <h2 className="font-syne" style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Payment Successful</h2>
            <p style={{ color: theme.textMuted, fontSize: 16, marginBottom: 24 }}>Thank you for your order! Your digital authenticity certificates are being generated.</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontFamily: 'Space Mono', color: theme.accent }}>
              <Sparkles size={14} /> Redirecting to home...
            </div>
          </div>
        ) : (
          <>
            <Link to="/cart" style={{ textDecoration: 'none', color: theme.textMuted, display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, fontWeight: 700, fontFamily: 'Space Mono' }} onMouseEnter={e => e.currentTarget.style.color=theme.accent} onMouseLeave={e => e.currentTarget.style.color=theme.textMuted}>
              <ArrowLeft size={14} /> BACK TO CART
            </Link>
            
            <h1 className="font-syne" style={{ fontSize: 'clamp(36px, 6vw, 48px)', fontWeight: 800, marginBottom: 40, letterSpacing: '-0.02em' }}>Checkout</h1>

            <div style={{ display: 'flex', gap: '40px 60px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              
              {/* Form panel */}
              <div style={{ flex: '1 1 600px' }}>
                <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                  
                  {/* Contact Info */}
                  <div style={{ background: theme.surface, borderRadius: 24, padding: 32, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, fontFamily: 'Syne', color: theme.accent }}>Contact Information</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="e.g. concierge@example.com" 
                        style={{
                          width: '100%',
                          padding: 16,
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
                  
                  {/* Shipping Address */}
                  <div style={{ background: theme.surface, borderRadius: 24, padding: 32, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, fontFamily: 'Syne', color: theme.accent }}>Shipping Address</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>First Name</label>
                          <input 
                            required 
                            type="text" 
                            style={{
                              width: '100%',
                              padding: 16,
                              background: theme.bg,
                              border: `1px solid ${theme.border}`,
                              borderRadius: 10,
                              color: theme.text,
                              fontSize: 15,
                              outline: 'none'
                            }} 
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Last Name</label>
                          <input 
                            required 
                            type="text" 
                            style={{
                              width: '100%',
                              padding: 16,
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
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Address Line 1</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Street name & number"
                          style={{
                            width: '100%',
                            padding: 16,
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
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Apartment, Suite, etc. (optional)</label>
                        <input 
                          type="text" 
                          style={{
                            width: '100%',
                            padding: 16,
                            background: theme.bg,
                            border: `1px solid ${theme.border}`,
                            borderRadius: 10,
                            color: theme.text,
                            fontSize: 15,
                            outline: 'none'
                          }} 
                        />
                      </div>
                      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>City</label>
                          <input 
                            required 
                            type="text" 
                            style={{
                              width: '100%',
                              padding: 16,
                              background: theme.bg,
                              border: `1px solid ${theme.border}`,
                              borderRadius: 10,
                              color: theme.text,
                              fontSize: 15,
                              outline: 'none'
                            }} 
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Postal / Zip Code</label>
                          <input 
                            required 
                            type="text" 
                            style={{
                              width: '100%',
                              padding: 16,
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
                    </div>
                  </div>
                  
                  {/* Payment Details */}
                  <div style={{ background: theme.surface, borderRadius: 24, padding: 32, border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, fontFamily: 'Syne', color: theme.accent }}>Payment Method</h3>
                    <div style={{ border: `1px solid ${theme.accent}40`, padding: 24, borderRadius: 14, marginBottom: 15, background: `${theme.accent}05` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, fontFamily: 'Syne', display: 'flex', alignItems: 'center', gap: 8 }}><CreditCard size={18} style={{ color: theme.accent }} /> Credit Card</span>
                        <div style={{ fontSize: 11, fontFamily: 'Space Mono', fontWeight: 700, background: theme.accent, color: theme.bg, padding: '3px 8px', borderRadius: 4 }}>SECURE</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Card Number</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="0000 0000 0000 0000"
                            style={{
                              width: '100%',
                              padding: 16,
                              background: theme.bg,
                              border: `1px solid ${theme.border}`,
                              borderRadius: 10,
                              color: theme.text,
                              fontSize: 15,
                              outline: 'none'
                            }} 
                          />
                        </div>
                        <div style={{ display: 'flex', gap: 20 }}>
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Expiry Date</label>
                            <input 
                              required 
                              type="text" 
                              placeholder="MM/YY" 
                              style={{
                                width: '100%',
                                padding: 16,
                                background: theme.bg,
                                border: `1px solid ${theme.border}`,
                                borderRadius: 10,
                                color: theme.text,
                                fontSize: 15,
                                outline: 'none'
                              }} 
                            />
                          </div>
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>CVC Code</label>
                            <input 
                              required 
                              type="text" 
                              placeholder="123" 
                              style={{
                                width: '100%',
                                padding: 16,
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
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="btn-solid" 
                    style={{ 
                      width: '100%', 
                      padding: 18, 
                      fontSize: 15, 
                      background: theme.accent, 
                      borderColor: theme.accent, 
                      color: theme.bg, 
                      boxShadow: `0 8px 30px ${theme.accent}30` 
                    }}
                  >
                    {loading ? 'Processing Securely...' : `Pay EGP ${grandTotal.toLocaleString()}`}
                  </button>
                </form>
              </div>

              {/* Order Summary Side Panel */}
              <div style={{
                flex: '1 1 340px',
                background: theme.surface,
                padding: 36,
                borderRadius: 24,
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                position: 'sticky',
                top: 100
              }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, fontFamily: 'Syne', color: theme.text }}>Order Summary</h3>
                
                <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 16, borderBottom: `1px solid ${theme.border}`, paddingBottom: 24 }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                      <div style={{ width: 60, height: 60, background: theme.bg, borderRadius: 10, overflow: 'hidden', border: `1px solid ${theme.border}`, position: 'relative' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{
                          position: 'absolute',
                          top: -5,
                          right: -5,
                          background: theme.accent,
                          color: theme.bg,
                          fontSize: 10,
                          fontWeight: 700,
                          fontFamily: 'Space Mono',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 2px 6px ${theme.accent}40`
                        }}>
                          {item.qty}
                        </span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Syne', color: theme.text }}>{item.name}</div>
                        {item.selectedColor && (
                          <div style={{ fontSize: 11, color: theme.textMuted, display: 'flex', alignItems: 'center', gap: 4, marginTop: 2, fontFamily: 'Space Mono' }}>
                            Color: <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: item.selectedColor, border: `1px solid ${theme.border}` }} />
                          </div>
                        )}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Space Mono', color: theme.accent }}>EGP {(item.price * item.qty).toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, color: theme.textMuted, fontSize: 13, fontFamily: 'Space Mono' }}>
                  <span>Subtotal</span>
                  <span style={{ color: theme.text, fontWeight: 600 }}>EGP {cartTotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, color: theme.textMuted, fontSize: 13, fontFamily: 'Space Mono' }}>
                  <span>VAT (14%)</span>
                  <span style={{ color: theme.text, fontWeight: 600 }}>EGP {tax.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, color: theme.textMuted, fontSize: 13, fontFamily: 'Space Mono' }}>
                  <span>Shipping</span>
                  <span style={{ color: shipping === 0 ? '#4ade80' : theme.text, fontWeight: 600 }}>{shipping === 0 ? 'Free' : `EGP ${shipping.toLocaleString()}`}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${theme.border}`, paddingTop: 20, fontSize: 18, fontWeight: 800, fontFamily: 'Syne' }}>
                  <span>Total</span>
                  <span style={{ color: theme.accent }}>EGP {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
