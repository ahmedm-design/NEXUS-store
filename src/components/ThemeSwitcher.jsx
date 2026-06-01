import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme, THEMES } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { themeKey, setThemeKey, theme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        style={{
          background: theme.glassBg,
          border: `1px solid ${theme.glassBorder}`,
          borderRadius: 8,
          padding: '8px 14px',
          cursor: 'pointer',
          color: theme.text,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'Space Mono',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          boxShadow: theme.shadow,
        }}
      >
        <Palette size={13} style={{ color: theme.accent }} />
        {THEMES[themeKey].name}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: -8 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 10,
              background: theme.glassBg,
              border: `1px solid ${theme.glassBorder}`,
              borderRadius: 12,
              padding: 8,
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              minWidth: 160,
              zIndex: 1100,
              boxShadow: theme.shadow,
            }}
          >
            {Object.entries(THEMES).map(([key, t]) => (
              <button
                key={key}
                onClick={() => { setThemeKey(key); setOpen(false) }}
                style={{
                  background: themeKey === key ? 'rgba(120, 120, 120, 0.08)' : 'none',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'Space Mono',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: themeKey === key ? theme.accent : theme.textMuted,
                  transition: 'all 0.2s',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (themeKey !== key) e.currentTarget.style.color = theme.accent
                }}
                onMouseLeave={(e) => {
                  if (themeKey !== key) e.currentTarget.style.color = theme.textMuted
                }}
              >
                <span style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: t.btnGrad,
                  boxShadow: `0 0 8px ${t.accent}40`,
                }} />
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
