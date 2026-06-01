import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Check, Star, Truck, ShieldCheck, ChevronDown, ChevronUp, ThumbsUp, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import productsData from '../data/products.json'

const ALL_PRODUCTS = productsData.products

// Dynamic Accordion Component
function AccordionItem({ title, children, defaultOpen = false }) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ borderBottom: `1px solid ${theme.border}`, transition: 'all 0.3s ease' }}>
      <button 
        onClick={() => setOpen(!open)} 
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 0', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: 16, 
          fontWeight: 700, 
          fontFamily: 'Syne',
          color: theme.text,
          textAlign: 'left'
        }}
      >
        {title} 
        {open ? <ChevronUp size={16} style={{ color: theme.accent }} /> : <ChevronDown size={16} style={{ color: theme.textMuted }} />}
      </button>
      {open && (
        <div style={{ paddingBottom: 20, color: theme.textMuted, lineHeight: 1.7, fontSize: 14 }}>
          {children}
        </div>
      )}
    </div>
  )
}

// Review Data Mock
const REVIEWS = [
  { name: 'Nour El-Din S.', date: 'April 12, 2026', rating: 5, text: 'Absolutely in love with this piece. The craftsmanship is incredible and it looks exactly like the photos. Worth every penny.' },
  { name: 'Tarek H.', date: 'March 28, 2026', rating: 5, text: 'Bought this as a gift and the packaging alone was stunning. Very high quality material.' },
  { name: 'Laila A.', date: 'March 15, 2026', rating: 4, text: 'Beautiful design. Shipping took a little longer than expected, but customer service was excellent.' }
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { theme } = useTheme()
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  const product = ALL_PRODUCTS.find(p => p.id === parseInt(id))
  
  useEffect(() => { 
    window.scrollTo(0, 0)
    setQty(1)
    setActiveImg(0)
    setAdded(false)
  }, [id])

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 160, textAlign: 'center', background: theme.bg, color: theme.text }}>
        <h2 style={{ fontSize: 24, fontFamily: 'Syne', fontWeight: 800 }}>Product not found.</h2>
        <Link to="/products" style={{ textDecoration: 'none', marginTop: 20, display: 'inline-block' }}>
          <button className="btn-solid" style={{ background: theme.accent, color: theme.bg }}>Back to Collection</button>
        </Link>
      </div>
    )
  }

  const related = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart({ ...product, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 100,
      background: theme.bg,
      color: theme.text,
      paddingBottom: 100,
      transition: 'all 0.4s ease',
    }}>
      
      {/* Dynamic Floating Toast Notification */}
      <div style={{
        position: 'fixed',
        top: 100,
        right: 20,
        background: theme.surface,
        border: `1px solid ${theme.border}`,
        color: theme.text,
        padding: '16px 24px',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        transform: added ? 'translateX(0)' : 'translateX(150%)',
        opacity: added ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        zIndex: 2000,
        boxShadow: theme.shadow
      }}>
        <div style={{
          background: 'rgba(74,222,128,0.15)',
          border: '1px solid rgba(74,222,128,0.3)',
          width: 28,
          height: 28,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Check size={14} color="#4ade80" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, fontFamily: 'Syne' }}>Added to Cart</div>
          <div style={{ fontSize: 11, color: theme.textMuted }}>{qty}x {product.name}</div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 60px)' }}>
        
        {/* Breadcrumbs */}
        <div style={{ fontSize: 11, color: theme.textMuted, marginBottom: 40, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontFamily: 'Space Mono' }}>
          <Link to="/" style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>Home</Link> &nbsp; / &nbsp; 
          <Link to="/products" style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.accent} onMouseLeave={e => e.target.style.color=theme.textMuted}>{product.category}</Link> &nbsp; / &nbsp; 
          <span style={{ color: theme.accent }}>{product.name}</span>
        </div>

        <div style={{ display: 'flex', gap: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* Gallery View */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              background: theme.surface,
              borderRadius: 24,
              overflow: 'hidden',
              marginBottom: 20,
              position: 'relative',
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow
            }} className="shimmer-glow">
              <img src={product.images[activeImg] || product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {product.tag && (
                <span className="tag-badge" style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  color: product.color,
                  borderColor: `${product.color}44`,
                  background: `${product.color}14`,
                  backdropFilter: 'blur(8px)'
                }}>
                  {product.tag}
                </span>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 10 }}>
                {product.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveImg(i)} 
                    style={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: 12, 
                      overflow: 'hidden', 
                      cursor: 'pointer', 
                      border: activeImg === i ? `2px solid ${theme.accent}` : `1px solid ${theme.border}`, 
                      opacity: activeImg === i ? 1 : 0.6, 
                      transition: 'all 0.2s', 
                      flexShrink: 0,
                      boxShadow: activeImg === i ? `0 0 12px ${theme.accent}40` : 'none'
                    }}
                  >
                    <img src={img} alt="Thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Specifications Column */}
          <div style={{ flex: '1 1 400px', position: 'sticky', top: 100 }}>
            <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>{product.category}</span>
            <h1 className="font-syne" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, marginBottom: 15, lineHeight: 1.1 }}>{product.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: 'Space Mono', color: theme.accent }}>EGP {product.price.toLocaleString()}</div>
              {product.originalPrice && (
                <div style={{ fontSize: 18, textDecoration: 'line-through', color: theme.textMuted, fontFamily: 'Space Mono' }}>EGP {product.originalPrice.toLocaleString()}</div>
              )}
            </div>

            <div style={{ display: 'flex', gap: 3, marginBottom: 30, alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill={i < Math.floor(product.rating) ? '#fbbf24' : 'transparent'} color={i < Math.floor(product.rating) ? '#fbbf24' : theme.border} />
              ))}
              <span style={{ fontSize: 13, color: theme.textMuted, marginLeft: 8, fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Space Mono' }}>Read {product.reviews} Reviews</span>
            </div>

            <p style={{ color: theme.textMuted, fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
              {product.description}
            </p>


            <div style={{ display: 'flex', gap: 20, marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${theme.border}`, borderRadius: 10, overflow: 'hidden', background: theme.surface }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 50, height: 50, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: theme.textMuted, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.text} onMouseLeave={e => e.target.style.color=theme.textMuted}>−</button>
                <span style={{ width: 44, textAlign: 'center', fontSize: 16, fontWeight: 700, fontFamily: 'Space Mono' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width: 50, height: 50, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: theme.textMuted, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color=theme.text} onMouseLeave={e => e.target.style.color=theme.textMuted}>+</button>
              </div>
              <button 
                onClick={handleAddToCart} 
                className="btn-solid" 
                style={{ 
                  flex: 1, 
                  height: 50, 
                  fontSize: 14, 
                  background: theme.accent, 
                  borderColor: theme.accent, 
                  color: theme.bg,
                  boxShadow: `0 8px 24px ${theme.accent}20` 
                }}
              >
                {added ? '✓ Added to Cart' : <><ShoppingBag size={16} /> Add to Cart</>}
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20, marginBottom: 44, borderTop: `1px solid ${theme.border}`, paddingTop: 30 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: theme.text }}>
                <Truck size={18} strokeWidth={2} style={{ color: theme.accent }} />
                <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Syne' }}>Free Shipping</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: theme.text }}>
                <ShieldCheck size={18} strokeWidth={2} style={{ color: theme.accent }} />
                <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Syne' }}>2-Year Warranty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: theme.text }}>
                <Check size={18} strokeWidth={2} style={{ color: theme.accent }} />
                <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Syne' }}>In Stock</span>
              </div>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: `1px solid ${theme.border}` }}>
              <AccordionItem title="Specifications" defaultOpen={true}>
                <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'Space Mono', fontSize: 13 }}>
                  {product.specs.map(s => (
                    <li key={s.key} style={{ color: theme.textMuted }}><strong style={{ color: theme.text }}>{s.key}:</strong> {s.value}</li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                Orders are processed within 1-2 business days. Enjoy free premium courier delivery across Egypt on orders over EGP 10,000. Not satisfied? Return your unused item within 30 days for a full refund in original packaging.
              </AccordionItem>
              <AccordionItem title="Care Instructions">
                To maintain the quality of your luxury product, avoid prolonged exposure to direct sunlight, heat, and moisture. Clean with a soft, dry cloth. Store in the provided dust bag when not in use.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div style={{ marginTop: 100, borderTop: `1px solid ${theme.border}`, paddingTop: 80 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
            <div>
              <h2 className="font-syne" style={{ fontSize: 32, fontWeight: 800, marginBottom: 15 }}>Customer Reviews</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <span style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Mono', color: theme.accent }}>{product.rating} / 5</span>
                <span style={{ color: theme.textMuted, fontSize: 14, fontFamily: 'Space Mono' }}>Based on {product.reviews} reviews</span>
              </div>
            </div>
            <button className="btn-outline" style={{ color: theme.text, borderColor: theme.border }}>Write a Review</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {REVIEWS.map((rev, idx) => (
              <div key={idx} style={{ background: theme.surface, padding: '36px 30px', borderRadius: 20, border: `1px solid ${theme.border}`, boxShadow: theme.shadow, transition: 'all 0.4s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill={i < rev.rating ? '#fbbf24' : 'transparent'} color={i < rev.rating ? '#fbbf24' : theme.border} />
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: theme.textMuted, fontFamily: 'Space Mono' }}>{rev.date}</span>
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: theme.text, fontFamily: 'Syne' }}>{rev.name} <Check size={13} color="#4ade80" style={{ marginLeft: 4, verticalAlign: 'middle', display: 'inline-block' }} /></h4>
                <p style={{ color: theme.textMuted, lineHeight: 1.6, fontSize: 14, marginBottom: 20, fontStyle: 'italic' }}>"{rev.text}"</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: theme.textMuted, fontSize: 12, cursor: 'pointer', fontFamily: 'Space Mono' }} onMouseEnter={e => e.currentTarget.style.color=theme.accent} onMouseLeave={e => e.currentTarget.style.color=theme.textMuted}>
                  <ThumbsUp size={13} style={{ color: theme.accent }} /> Helpful
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: 100, borderTop: `1px solid ${theme.border}`, paddingTop: 80 }}>
            <h2 className="font-syne" style={{ fontSize: 32, fontWeight: 800, marginBottom: 48, textAlign: 'center' }}>You May Also Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '32px' }}>
              {related.map(p => (
                <div 
                  key={p.id} 
                  onClick={() => navigate(`/products/${p.id}`)} 
                  style={{ 
                    cursor: 'pointer', 
                    background: theme.surface, 
                    borderRadius: 20, 
                    border: `1px solid ${theme.border}`, 
                    boxShadow: theme.shadow, 
                    padding: 16, 
                    textAlign: 'left', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    transition: 'transform 0.3s ease' 
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                >
                  <div style={{ width: '100%', aspectRatio: '1', background: theme.bg, borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent, textTransform: 'uppercase', marginBottom: 4 }}>{p.category}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: theme.text, fontFamily: 'Syne', lineHeight: 1.3 }}>{p.name}</h3>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent, marginTop: 'auto' }}>EGP {p.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
