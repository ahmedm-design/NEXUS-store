# NEXUS Store — Luxury Futuristic E-Commerce

> "Upgrade Your Style Beyond Reality"

A premium, full-featured luxury accessories e-commerce frontend built with React (Vite) + TailwindCSS + Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
nexus-store/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky blur navbar with cart count
│   │   ├── Footer.jsx          # Full footer with newsletter
│   │   ├── ProductCard.jsx     # Reusable product card with hover effects
│   │   ├── QuickViewModal.jsx  # Quick view overlay modal
│   │   ├── SkeletonCard.jsx    # Loading skeleton
│   │   └── ThemeSwitcher.jsx   # Dark / Neon / Cyberpunk switcher
│   ├── context/
│   │   ├── CartContext.jsx     # Global cart state (useReducer)
│   │   └── ThemeContext.jsx    # Theme state (3 modes)
│   ├── data/
│   │   └── products.json       # Mock product data (8 products)
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver scroll animation hook
│   ├── pages/
│   │   ├── HomePage.jsx        # Hero + features + featured products
│   │   ├── ProductsPage.jsx    # Filterable product grid
│   │   ├── ProductDetailPage.jsx # Product detail with gallery
│   │   ├── CartPage.jsx        # Cart with order summary + checkout
│   │   ├── AboutPage.jsx       # Brand story + timeline + values
│   │   └── ContactPage.jsx     # Contact form + info
│   ├── App.jsx                 # Router + layout
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System

### Themes (switchable via navbar)
| Theme | Background | Accent | Style |
|-------|-----------|--------|-------|
| **DARK** | `#030308` | `#c084fc` | Deep void purple |
| **NEON** | `#000d1a` | `#00ffff` | Electric cyan |
| **CYBER** | `#0a0600` | `#ffd700` | Gold on black |

### Typography
- **Syne** — Display / headings / buttons
- **DM Sans** — Body text / descriptions
- **Space Mono** — Labels / data / badges / code

### Color Palette
- **Void:** `#030308` — primary background
- **Surface:** `#0a0a18` — card backgrounds
- **Neon Purple:** `#c084fc` — primary accent
- **Ice Blue:** `#38bdf8` — secondary accent
- **Gold:** `#fbbf24` — highlight
- **Muted:** `#6b6b8a` — secondary text

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| React | ^18.3 | UI library |
| React DOM | ^18.3 | DOM rendering |
| React Router DOM | ^6.23 | Client-side routing |
| Framer Motion | ^11.0 | Animations & transitions |
| Lucide React | ^0.383 | Icon system |
| TailwindCSS | ^3.4 | Utility CSS |
| Vite | ^5.2 | Build tool |

---

## ✨ Features

### Pages
- **Home** — Animated hero, floating product previews, features grid, featured products, CTA banner
- **Products** — Search, category filters, price slider, sort, skeleton loaders, quick view modal
- **Product Detail** — Image gallery, specs grid, quantity selector, related products
- **Cart** — Live totals, tax + shipping calculation, quantity controls, checkout confirmation
- **About** — Brand story, stats, values grid, animated timeline
- **Contact** — Validated form, contact info, social links, map placeholder

### UI/UX
- ✅ Fully responsive (mobile-first)
- ✅ Framer Motion page transitions
- ✅ Scroll-triggered reveal animations (IntersectionObserver)
- ✅ Skeleton loading states
- ✅ Sticky glassmorphism navbar
- ✅ Theme switcher (Dark / Neon / Cyberpunk)
- ✅ Glassmorphism cards with neon glow on hover
- ✅ Animated gradient hero text
- ✅ Product quick-view modal
- ✅ Cart persistence (in-memory, React state)
- ✅ Form validation on Contact page

---

## 🔧 Customisation

### Adding Products
Edit `src/data/products.json` — follow the existing schema:
```json
{
  "id": 9,
  "name": "Product Name",
  "category": "Wearables",
  "price": 999,
  "originalPrice": 1299,
  "rating": 4.8,
  "reviews": 200,
  "tag": "NEW",
  "color": "#c084fc",
  "image": "https://...",
  "images": ["https://...", "https://...", "https://..."],
  "description": "...",
  "specs": [{ "key": "Material", "value": "Titanium" }],
  "popularity": 90,
  "inStock": true,
  "featured": false
}
```

### Adding a Theme
Edit `src/context/ThemeContext.jsx` — add to the `THEMES` object.

---

## 📄 License
MIT — built with ❤️ as a premium UI showcase.
