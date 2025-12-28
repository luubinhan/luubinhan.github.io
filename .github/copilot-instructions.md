# AI Coding Agent Instructions

## Project Overview
This is a **Gatsby v2** personal portfolio and landing page built with React 16, styled-components, and Bootstrap 4 (SCSS). The site showcases projects, courses, certifications, and links to an external blog.

## Architecture & Structure

### Core Technologies
- **Gatsby 2.3.31** - Static site generation
- **React 16.5.1** - UI framework  
- **styled-components 4.2** - Primary styling for section components
- **Bootstrap 4 (SCSS)** - Grid system and base styles
- **react-scroll** - Smooth scrolling navigation
- **react-reveal** - Scroll-based animations

### Project Layout
```
src/
├── components/          # Reusable UI components (Header, Footer, Menu, SEO)
│   └── styled/         # styled-components definitions (Section*, Styled*)
├── sections/           # Page sections (course-mfe.jsx)
├── pages/              # Gatsby pages (index.js - single-page app)
├── scss/               # Bootstrap imports and component styles
│   ├── components/     # SCSS modules (_header.scss, _footer.scss, etc.)
│   └── bootstrap/      # Custom Bootstrap configuration
├── data/               # JSON/YAML data (features.json, social.yaml)
└── images/             # SVG logos and image assets
```

## Key Conventions

### Styling Architecture (Dual System)
This project uses **two distinct styling approaches**:

1. **styled-components** (in `src/components/styled/`)
   - Used for major page sections and large layout components
   - Naming: `Section*` (e.g., `SectionTop`, `SectionBlog`, `SectionWork`)
   - Naming: `Styled*` (e.g., `StyledBlogTitle`, `StyledWorkItem`)
   - Example: [src/components/styled/StyledBlogTitle.js](src/components/styled/StyledBlogTitle.js)
   
2. **SCSS modules** (in `src/scss/components/`)
   - Used for traditional components (header, footer, navigation)
   - Naming: `_component-name.scss` (e.g., `_header.scss`, `_main-menu.scss`)
   - Imported via [src/scss/style.scss](src/scss/style.scss)

**When to use which:**
- Use styled-components for new section-level components or dynamic styles
- Use SCSS for traditional UI components that follow Bootstrap patterns
- Both systems coexist; check similar components before choosing

### Single-Page Application Pattern
The main page ([src/pages/index.js](src/pages/index.js)) is a single-page application with:
- **react-scroll** `<Element>` and `<Link>` components for scroll navigation
- Menu items link to named scroll targets (e.g., `to="workSection"`)
- All content sections defined inline in one 665-line file
- Separate section components in `src/sections/` (e.g., `course-mfe.jsx`) imported and used

### Component Patterns
- **Class components** for stateful logic (see [src/components/Header.js](src/components/Header.js))
- **Functional components** for presentations (see [src/components/Hello.js](src/components/Hello.js))
- **SVG animations** using inline SVG with SCSS animations (see `Hello.js` + `Hello.scss`)

### Configuration
- **Site metadata** in [gatsby-config.js](gatsby-config.js) - update menu links, contact info, analytics
- **Node version locked** to 14.9.0 (see [package.json](package.json) engines field)
- **Important:** On macOS, use `sass` package instead of `node-sass` (per [README.md](README.md))

## Development Workflows

### Commands
```bash
npm run develop        # Start dev server (alias: npm run dev, npm start)
npm run build          # Production build
npm run build:pp       # Build with path prefix
npm run deploy         # Build and deploy to GitHub Pages
npm run clean          # Remove public folder
```

### Deploy Process
Uses **gh-pages** package for GitHub Pages deployment:
- `npm run deploy` - Builds with `--prefix-paths` and deploys to `gh-pages` branch
- External blog hosted separately at https://luubinhan.github.io/blog/

### Bootstrap Customization
Most Bootstrap modules are **commented out** in [src/scss/style.scss](src/scss/style.scss) to reduce bundle size. Only essential modules loaded:
- Grid system, reboot, type, tables, utilities
- Enable additional modules as needed by uncommenting imports

## Data Flow
- **Static JSON** data in `src/data/` loaded via `gatsby-transformer-json`
- **Gatsby GraphQL** for querying data sources (features, social links)
- **Site metadata** accessed via GraphQL in components

## Code Quality
- **ESLint** configured with Airbnb config (see [package.json](package.json) devDependencies)
- **Prettier** integrated for code formatting

## Common Tasks

### Adding a new section
1. Create styled-component in `src/components/styled/SectionNewSection.js`
2. Import in [src/pages/index.js](src/pages/index.js)
3. Wrap in `<Element name="newSection">` for scroll navigation
4. Add menu link with `<Link to="newSection">`

### Updating navigation
Edit `menuLinks` array in [gatsby-config.js](gatsby-config.js) siteMetadata or modify inline menu in [src/pages/index.js](src/pages/index.js)

### Adding images
Place in `static/images/` or `src/images/` - static assets served directly, src images processed by Gatsby
