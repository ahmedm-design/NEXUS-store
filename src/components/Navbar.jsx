import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, ShoppingCart, Menu, X, LogIn } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

import AuthModal from './AuthModal'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop Collections', path: '/products' },
  { label: 'Our Story', path: '/about' },
  { label: 'Client Services', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('nexus_logged_in') === 'true'
  })
  
  const { cartCount } = useCart()
  const { theme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Poll localStorage in case sign out occurs in another component
  useEffect(() => {
    const checkAuth = () => {
      const status = localStorage.getItem('nexus_logged_in') === 'true'
      if (status !== isLoggedIn) {
        setIsLoggedIn(status)
      }
    }
    const interval = setInterval(checkAuth, 1000)
    return () => clearInterval(interval)
  }, [isLoggedIn])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const handleLoginSuccess = (email) => {
    localStorage.setItem('nexus_logged_in', 'true')
    localStorage.setItem('nexus_user_email', email)
    setIsLoggedIn(true)
    navigate('/profile')
  }

  const handleUserClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault()
      setAuthOpen(true)
    }
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        height: 80,
        background: scrolled ? theme.glassBg : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.glassBorder}` : 'none',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 60px)',
        color: theme.text,
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'currentColor' }}>
          <span className="font-syne" style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.04em' }}>
            NEXUS <span style={{ fontWeight: 400, color: theme.accent, fontStyle: 'italic' }}>CAIRO</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} to={path} style={{ textDecoration: 'none', color: 'currentColor' }}>
              <span className={`nav-link ${location.pathname === path ? 'active' : ''}`} style={{
                color: location.pathname === path ? theme.accent : theme.textMuted,
              }}>
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>

          {!isLoggedIn ? (
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setAuthOpen(true)}
              className="btn-outline"
              style={{
                padding: '8px 16px',
                fontSize: 11,
                borderColor: theme.glassBorder,
                background: theme.glassBg,
                color: theme.text,
                fontFamily: 'Space Mono',
                fontWeight: 700,
                letterSpacing: '0.08em',
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: theme.shadow
              }}
            >
              <LogIn size={12} style={{ color: theme.accent }} /> SIGN IN
            </motion.button>
          ) : (
            <Link to="/profile" onClick={handleUserClick} style={{ color: 'currentColor', display: 'flex', alignItems: 'center' }}>
              <User size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
            </Link>
          )}
          
          <Link to="/cart" style={{ textDecoration: 'none', position: 'relative', display: 'flex', color: 'currentColor' }}>
            <ShoppingCart size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -8,
                right: -10,
                background: theme.accent,
                color: theme.bg,
                fontSize: 10,
                fontWeight: 700,
                fontFamily: 'Space Mono',
                width: 18,
                height: 18,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 10px ${theme.accent}60`,
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            color: theme.text,
            padding: 8,
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 80,
              left: 0,
              right: 0,
              zIndex: 899,
              background: theme.glassBg,
              borderBottom: `1px solid ${theme.glassBorder}`,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxShadow: theme.shadow,
              color: theme.text,
            }}
          >
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === path ? theme.accent : theme.text,
                  fontSize: 17,
                  fontWeight: 600,
                  fontFamily: 'Syne',
                }}
              >
                {label}
              </Link>
            ))}
            


            <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
              {!isLoggedIn ? (
                <button 
                  onClick={() => { setMenuOpen(false); setAuthOpen(true); }}
                  className="btn-solid" 
                  style={{ width: '100%', fontSize: 13, padding: '12px 14px', background: theme.accent, color: theme.bg }}
                >
                  <LogIn size={16} /> Sign In / Register
                </button>
              ) : (
                <Link to="/profile" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'currentColor', flex: 1 }}>
                  <button className="btn-outline" style={{ width: '100%', fontSize: 13, padding: '10px 14px' }}>
                    <User size={16} /> Dashboard
                  </button>
                </Link>
              )}
              
              <Link to="/cart" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'currentColor', flex: 1 }}>
                <button className="btn-solid" style={{ width: '100%', fontSize: 13, padding: '10px 14px', background: theme.accent, color: theme.bg }}>
                  <ShoppingCart size={16} /> Cart ({cartCount})
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassmorphic Auth Modal */}
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
