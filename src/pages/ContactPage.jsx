import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, MessageSquare, Send } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const FAQS = [
  { q: "Do you deliver across Egypt?", a: "Yes, we offer complimentary express courier delivery to all Governorates on all orders over EGP 10,000. Cairo, Giza, and Alexandria orders typically arrive within 24-48 hours." },
  { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Items must be in their original, unused condition with all tags and authenticity cards attached." },
  { q: "Do your products come with a warranty?", a: "Absolutely. All our leather goods and accessories carry a comprehensive 2-year warranty covering manufacturing defects." },
  { q: "How can I authenticate my purchase?", a: "Every item ships with a verifiable digital certificate of authenticity and a unique serial number stamped inside the product." }
]

function Accordion({ q, a }) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${theme.border}`, padding: '24px 0', transition: 'all 0.3s ease' }}>
      <button 
        onClick={() => setOpen(!open)} 
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: 17, 
          fontWeight: 700, 
          fontFamily: 'Syne', 
          color: theme.text,
          textAlign: 'left' 
        }}
      >
        {q} 
        {open ? <ChevronUp size={18} style={{ color: theme.accent }} /> : <ChevronDown size={18} style={{ color: theme.textMuted }} />}
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ marginTop: 14, color: theme.textMuted, lineHeight: 1.7, fontSize: 15 }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  const { theme } = useTheme()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
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
        
        {/* Banner */}
        <div style={{ textAlign: 'center', marginBottom: 80, position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.glow} 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Space Mono', color: theme.accent, textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 12 }}>CONCIERGE SERVICES</span>
            <h1 className="font-syne" style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>Client Services</h1>
            <p style={{ fontSize: 17, color: theme.textMuted, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              Whether you have a question about shipping, returns, or need bespoke styling advice, our dedicated concierge team is here to assist you.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '60px 80px', flexWrap: 'wrap', marginBottom: 120 }}>
          
          {/* Contact Details */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: 40 }}>
            <h2 className="font-syne" style={{ fontSize: 30, fontWeight: 800 }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: 12, borderRadius: 12, color: theme.accent }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, fontFamily: 'Syne' }}>Email Us</h4>
                  <p style={{ color: theme.textMuted, fontSize: 14, marginBottom: 8 }}>Expect a response within 24 hours.</p>
                  <a href="mailto:concierge@nexus-cairo.com" style={{ color: theme.accent, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px', fontFamily: 'Space Mono', fontSize: 14 }}>concierge@nexus-cairo.com</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: 12, borderRadius: 12, color: theme.accent }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, fontFamily: 'Syne' }}>Call Us</h4>
                  <p style={{ color: theme.textMuted, fontSize: 14, marginBottom: 8 }}>Sat-Thu, 10am - 8pm EET</p>
                  <a href="tel:+20227351928" style={{ color: theme.accent, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px', fontFamily: 'Space Mono', fontSize: 14 }}>+20 (2) 2735-1928</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, padding: 12, borderRadius: 12, color: theme.accent }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, fontFamily: 'Syne' }}>Flagship Boutique</h4>
                  <p style={{ color: theme.textMuted, lineHeight: 1.6, fontSize: 14 }}>15 El-Gezira Street<br/>Zamalek, Cairo<br/>Egypt</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            flex: '2 1 500px',
            background: theme.surface,
            padding: 'clamp(24px, 5vw, 48px)',
            borderRadius: 24,
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow,
            transition: 'all 0.4s ease'
          }}>
            <h2 className="font-syne" style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <MessageSquare size={22} style={{ color: theme.accent }} /> Send a Message
            </h2>
            
            {submitted ? (
              <div style={{
                background: 'rgba(74,222,128,0.1)',
                border: '1px solid rgba(74,222,128,0.3)',
                color: '#4ade80',
                padding: '20px 24px',
                borderRadius: 12,
                fontSize: 14,
                fontFamily: 'Space Mono',
                fontWeight: 700
              }}>
                ✓ Message received! Our concierge team will reach out shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>First Name</label>
                    <input 
                      required
                      type="text" 
                      style={{ 
                        width: '100%', 
                        padding: '14px 18px', 
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
                        padding: '14px 18px', 
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
                  <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Email Address</label>
                  <input 
                    required
                    type="email" 
                    style={{ 
                      width: '100%', 
                      padding: '14px 18px', 
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
                  <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Message</label>
                  <textarea 
                    required
                    rows={5} 
                    style={{ 
                      width: '100%', 
                      padding: '14px 18px', 
                      background: theme.bg, 
                      border: `1px solid ${theme.border}`, 
                      borderRadius: 10, 
                      color: theme.text, 
                      fontSize: 15, 
                      outline: 'none', 
                      resize: 'vertical' 
                    }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-solid" 
                  style={{ 
                    padding: '16px', 
                    fontSize: 14, 
                    marginTop: 10,
                    background: theme.accent,
                    borderColor: theme.accent,
                    color: theme.bg,
                    boxShadow: `0 8px 20px ${theme.accent}20`
                  }}
                >
                  Submit Inquiry <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: 800, margin: '0 auto', marginTop: 40 }}>
          <h2 className="font-syne" style={{ fontSize: 32, fontWeight: 800, marginBottom: 30, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ background: theme.surface, borderRadius: 24, padding: '10px 30px', border: `1px solid ${theme.border}`, boxShadow: theme.shadow, transition: 'all 0.4s ease' }}>
            {FAQS.map((faq, i) => <Accordion key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>

      </div>
    </div>
  )
}
