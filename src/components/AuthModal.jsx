import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, Eye, EyeOff, Sparkles, Check } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const { theme } = useTheme()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onLoginSuccess?.(email || 'cairo.visionary@gmail.com')
        onClose()
      }, 1500)
    }, 1800)
  }

  const handleGoogleSignIn = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onLoginSuccess?.('cairo.visionary@gmail.com')
        onClose()
      }, 1500)
    }, 1500)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(3,3,8,0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          onClick={e => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: 440,
            width: '100%',
            borderRadius: 24,
            padding: '36px 30px',
            background: theme.surface,
            borderColor: theme.glassBorder,
            boxShadow: theme.shadow,
            color: theme.text,
            position: 'relative',
          }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            style={{ 
              position: 'absolute', 
              top: 24, 
              right: 24, 
              background: 'none', 
              border: 'none', 
              color: theme.textMuted, 
              cursor: 'pointer', 
              padding: 4, 
              transition: 'color 0.2s' 
            }}
            onMouseEnter={e => e.target.style.color = theme.text}
            onMouseLeave={e => e.target.style.color = theme.textMuted}
          >
            <X size={18} />
          </button>

          {success ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                background: 'rgba(74,222,128,0.15)',
                border: '1px solid rgba(74,222,128,0.3)',
                width: 56,
                height: 56,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Check size={28} color="#4ade80" />
              </div>
              <h3 className="font-syne" style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Success</h3>
              <p style={{ color: theme.textMuted, fontSize: 14 }}>
                {isSignUp ? 'Account created successfully!' : 'Successfully signed in!'}
              </p>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <Sparkles size={16} style={{ color: theme.accent }} />
                  <span style={{ fontSize: 10, fontFamily: 'Space Mono', fontWeight: 700, color: theme.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>NEXUS MEMBERSHIP</span>
                </div>
                <h2 className="font-syne" style={{ fontSize: 26, fontWeight: 800, color: theme.text }}>
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>
                <p style={{ color: theme.textMuted, fontSize: 14, marginTop: 6 }}>
                  {isSignUp ? 'Join the inner circle for exclusive access.' : 'Sign in to access your digital wardrobe.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                
                {isSignUp && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={16} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: theme.textMuted }} />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{ 
                          width: '100%', 
                          padding: '14px 18px 14px 44px', 
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
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: theme.textMuted }} />
                    <input 
                      required
                      type="email" 
                      placeholder="e.g. concierge@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '14px 18px 14px 44px', 
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
                  <label style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.textMuted, fontFamily: 'Space Mono' }}>Password</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={16} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: theme.textMuted }} />
                    <input 
                      required
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '14px 44px 14px 44px', 
                        background: theme.bg, 
                        border: `1px solid ${theme.border}`, 
                        borderRadius: 10, 
                        color: theme.text, 
                        fontSize: 15,
                        outline: 'none'
                      }} 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: theme.textMuted,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-solid"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: 14,
                    background: theme.accent,
                    borderColor: theme.accent,
                    color: theme.bg,
                    boxShadow: `0 8px 24px ${theme.accent}20`,
                    marginTop: 10,
                  }}
                >
                  {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
                </button>
              </form>

              {/* Google Sign In Divider & Button */}
              <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0 16px', gap: 12 }}>
                <div style={{ flex: 1, height: 1, background: theme.border }} />
                <span style={{ fontSize: 10, textTransform: 'uppercase', fontFamily: 'Space Mono', color: theme.textMuted, letterSpacing: '0.05em' }}>OR</span>
                <div style={{ flex: 1, height: 1, background: theme.border }} />
              </div>

              <button 
                type="button"
                onClick={handleGoogleSignIn}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 10,
                  border: `1px solid ${theme.border}`,
                  background: theme.surface,
                  color: theme.text,
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: 13,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: theme.shadow
                }}
                onMouseEnter={e => { e.currentTarget.style.background = theme.bg; e.currentTarget.style.borderColor = theme.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.borderColor = theme.border; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
              </button>

              {/* Toggle Form Type */}
              <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: theme.textMuted }}>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: theme.accent,
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    fontFamily: 'Syne',
                    padding: 0
                  }}
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
