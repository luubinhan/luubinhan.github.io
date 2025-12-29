# Luu Binh An - Portfolio Website

Personal portfolio website for Luu Binh An, Senior Frontend Developer & Educator. Built with Gatsby 5 and React 18.

## 🚀 Tech Stack

- **Framework**: Gatsby 5.13 (React 18.2)
- **Styling**: SCSS + CSS Modules + Bootstrap 4.6
- **Animation**: framer-motion 11.x
- **Navigation**: react-scroll for smooth section scrolling
- **Node Version**: 22.14.0

## 📋 Prerequisites

- Node.js 22.14.0 or higher
- npm or yarn

## 🛠️ Development

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
# or
npm run develop
```

Runs the development server at `http://localhost:8000`

### Build

```bash
npm run build
```

Creates an optimized production build.

### Build & Deploy to GitHub Pages

```bash
npm run deploy
# or
npm run build:gh
```

Builds with path prefix and deploys to GitHub Pages.

### Clean Build

```bash
npm run clean
```

Removes the `public` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components (CSS Modules)
│   ├── *.js            # Component files
│   └── *.module.scss   # CSS Module styles
├── pages/              # Gatsby page components
│   ├── index.js        # Main landing page
│   └── 404.js          # 404 error page
├── sections/           # Page section components
├── scss/               # Global SCSS styles
│   ├── style.scss      # Main stylesheet entry
│   ├── bootstrap/      # Bootstrap customization
│   ├── components/     # Component-specific styles
│   └── pages/          # Page-specific styles
├── helpers/            # Utility functions
└── images/             # Image assets

static/
└── images/             # Static image assets (AVIF format)
```

## 🎨 Styling Architecture

The project uses **CSS Modules** as the primary styling approach:

### CSS Modules Pattern

```javascript
// Import as default
import styles from './ComponentName.module.scss';

// Usage
<div className={styles.className}>
```

### Key Conventions

- **CSS Module files**: `ComponentName.module.scss` in `src/components/`
- **Class names**: camelCase (`.sectionWork`, not `.section-work`)
- **Global classes**: Use `:global(.className)` for child elements receiving classes from props
- **Never** use namespace imports: `import * as styles` ❌

### SSR-Safe Animations

Always use the `AnimatedDiv` wrapper for framer-motion animations:

```javascript
import AnimatedDiv from '../components/AnimatedDiv';

<AnimatedDiv
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</AnimatedDiv>
```

**Never** import `motion` directly from framer-motion to avoid SSR issues.

## 🔧 Configuration

### Gatsby Configuration

- **CSS Modules**: Configured with `cssLoaderOptions.esModule: false` and `namedExport: false`
- **ESLint**: Disabled via webpack config override
- **Sass warnings**: Silenced for legacy deprecations

### Environment Variables

- `NETLIFY_GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID

## 📱 Features

- Single-page application with smooth scroll navigation
- Responsive design with Bootstrap grid system
- 16-column custom grid layout for portfolio items
- Animated section transitions with framer-motion
- Course showcase sections
- Blog integration
- Portfolio work gallery

## 🌐 Deployment

The site is deployed to GitHub Pages. Use the following command to build and deploy:

```bash
npm run deploy
```

This will:
1. Build the site with path prefixes
2. Deploy to the `gh-pages` branch
3. Make it available at `https://luubinhan.github.io/`

## 📝 License

MIT License - Copyright (c) Luu Binh An

## 👤 Author

**Luu Binh An**
- Email: luubinhan1989@gmail.com
- Website: [https://luubinhan.github.io/](https://luubinhan.github.io/)
- Blog: [https://luubinhan.github.io/blog/](https://luubinhan.github.io/blog/)
