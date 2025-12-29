# Copilot Instructions for luubinhan.github.io

## Project Overview
This is a Gatsby 5 portfolio website for Luu Binh An (Senior Frontend Developer & Educator). It's a static site showcasing work, courses, and blog content with smooth scroll navigation.

## Tech Stack
- **Framework**: Gatsby 5.13 (React 18.2) + Node 22.14.0
- **Styling**: SCSS + CSS Modules (migrating from styled-components) + Bootstrap 4.6
- **Animation**: framer-motion 11.x (with SSR-safe wrapper)
- **Navigation**: react-scroll for smooth section navigation

## Architecture Patterns

### Styling Migration in Progress
The codebase is **actively migrating from styled-components to CSS Modules**:

**CSS Modules Pattern (PREFERRED for new/updated components)**:
```javascript
// Import as default, not namespace
import styles from './ComponentName.module.scss';

// Usage
<div className={styles.className}>
```

**Legacy styled-components** (in `src/components/styled/`):
- Still used by: SectionTop, SectionTestimony, SectionCourse, SectionHeaderWork, StyledBoxTitle, StyledBlogTitle
- Being replaced: SectionWork ✓, StyledWorkGroup ✓

**When converting styled-components to CSS Modules**:
1. Create `.module.scss` file in `src/components/` (NOT in `styled/` subdirectory)
2. Use default import: `import styles from './Name.module.scss'`
3. Replace JSX: `<StyledComponent>` → `<div className={styles.className}>`
4. Use `:global(.className)` for child elements that receive classes from props

### CSS Module Examples
```scss
// WorkItem.module.scss - Dynamic classes
.workItem { /* base styles */ }
.column1 { grid-column: 1 / span 4; }
.column7 { grid-column: 7 / span 4; }
.colorGreen::after { background: #C9DC08; }
.colorBlue::after { background: #00A5B4; }

// Accessing child elements with external classes
.workItem :global(.title) {
  color: #fff;
}
```

```javascript
// WorkItem.js - Computing class names
const columnClass = styles[`column${column}`] || '';
const colorClass = color === '#C9DC08' ? styles.colorGreen : styles.colorBlue;
<div className={`${styles.workItem} ${columnClass} ${colorClass}`}>
```

### SSR-Safe Animation Wrapper
Framer-motion requires client-side only loading. Use `AnimatedDiv` wrapper:

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

**Never** import `motion` directly from `framer-motion` in components.

### Page Structure
Single-page application with scroll navigation:
- `src/pages/index.js` - Main landing page (React class component)
- Uses `react-scroll` Element/Link components for section navigation
- Sections: topSection, khoa-hoc-html-css-can-ban, testimonySection, workSection, blogSection

## Development Workflows

### Essential Commands
```bash
npm run dev         # Start development server (gatsby develop)
npm run build       # Production build
npm run build:gh    # Clean + build with prefix paths + deploy to gh-pages
npm run deploy      # Build and deploy to GitHub Pages
```

### Gatsby Configuration Notes
- **SCSS Modules**: Configured in `gatsby-config.js` with `cssLoaderOptions.esModule: false` and `namedExport: false`
- **Offline plugin disabled**: Incompatible with Node 18+
- **ESLint disabled**: Removed via `gatsby-node.js` webpack config override
- **Sass deprecation warnings**: Silenced for `slash-div`, `abs-percent`, `if-function`, `lighten`, `map-merge`

### SCSS Organization
```
src/scss/
├── style.scss              # Main entry (imported in pages)
├── _bootstrap-variables.scss
├── bootstrap/              # Customized Bootstrap partials
├── components/             # Component-specific styles
├── libraries/              # Third-party overrides
└── pages/                  # Page-specific styles
```

**Note**: Use `sass` package, NOT `node-sass` (especially on macOS)

## Common Patterns

### Grid Layout System
WorkItem uses 16-column grid (defined in StyledWorkGroup):
- Columns span via `column` prop (1-16)
- Colors: `#C9DC08` (green) or `#00A5B4` (blue)

### React Class Components
Main pages use class components with lifecycle methods:
- `componentDidMount`: Setup scroll listeners, scrollSpy
- `componentWillUnmount`: Cleanup event listeners
- State management for animations (e.g., `appearIn` state)

### Image Assets
- Source: `static/images/*.avif` (AVIF format for optimization)
- Public path: `/images/` (served from static folder)
- SVG assets: `/dot.svg`, `/circle.svg` (in public root)

## Key Conventions
1. **CSS Modules**: Always use default import, never `import * as`
2. **Component Location**: New components → `src/components/`, NOT in `styled/` subdirectory
3. **Animations**: Use `AnimatedDiv` wrapper, never direct framer-motion imports
4. **Class Names**: Use camelCase for CSS module classes (`.sectionWork`, not `.section-work`)
5. **Bootstrap**: Only grid, type, and reboot modules imported (minimal footprint)

## Integration Points
- **Google Analytics**: Via `gatsby-plugin-google-gtag` (tracking ID from env: `NETLIFY_GOOGLE_ANALYTICS_ID`)
- **Deployment**: GitHub Pages via `gh-pages` package
- **External Blog**: Links to `https://luubinhan.github.io/blog/` (separate site)