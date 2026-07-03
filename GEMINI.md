# ASAR Presentation Studio Workspace Instructions

This document provides foundational mandates, architectural maps, building/running instructions, and development conventions for the **Adaptive Smart Autonomous Robot (ASAR) Presentation Studio** codebase. Gemini CLI must rigorously adhere to these instructions.

---

## 1. Project Overview

The ASAR Presentation Studio is an immersive, Prezi-style **Spatial 2.5D/3D Infinite Canvas Presentation Builder**. It serves as a interactive presentation workspace for the ASAR robot project under Borg El Arab Technological University.

### Key Features
- **Spatial Canvas (`src/components/SlidesCanvas.tsx`)**: An infinite workspace where slides exist at absolute 2.5D coordinates ($x, y, \text{scale}, \text{rotate}$). It handles mouse-drag panning, zooming, and transitions between slide nodes using cubic-bezier zoom sweeps.
- **3D Interactive Background (`src/components/Background3D.tsx`)**: High-performance HTML5 Canvas-rendered cosmic starfield and floor/ceiling longitudinal/transverse projection grids. It drifts and scales dynamically based on camera parameters.
- **Automation Script Panel (`src/components/GASPanel.tsx`)**: Simulates a Google Apps Script environment inside a sidebar. Includes a code editor block with mock layout scripts (Spiral, Grid, Carousel, Chaos) and a mock debug logger output console.
- **Deck Architecture Sidebar (`src/components/SlidesList.tsx`)**: Renders the slide card sequence list. Provides options for slide deletion, ordering list re-shuffling, global transition config selectors, and direct coordinate field inputs.
- **Themed Slides (`src/components/AeroSlides.tsx`)**: Richly animated modules matching specific robot units (Mission Control, Experimental Metrics, Team Roster, Multi-Modal Perception, Power & Actuation, System Architecture). Uses Canvas radar sweeps, interactive blueprints, and nested telemetry stats.

---

## 2. Directory & Architecture Map

```
presentation-studio/
├── .env.example            # Environment variables example template
├── .gitignore              # Standard git ignore definitions
├── index.html              # Entry HTML file
├── package.json            # Scripts, dependencies and engine configurations
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite compilation config (with Tailwind v4)
├── assets/                 # Reference documents (Excel team list, raw pptx)
└── src/
    ├── main.tsx            # App entry point
    ├── App.tsx             # Main orchestrator state machine
    ├── index.css           # Global CSS and Tailwind v4 declarations
    ├── data.ts             # Initial slide nodes dataset & script definitions
    ├── types.ts            # TypeScript interfaces & custom models
    └── components/
        ├── AeroSlides.tsx  # Layout slide blueprints & telemetry displays
        ├── Background3D.tsx # 3D background grid & point cloud particle simulation
        ├── GASPanel.tsx    # Apps Script simulator & macro executor
        ├── SlidesCanvas.tsx # Spatial drag, pan, zoom stage controller
        └── SlidesList.tsx  # Sidebar control panel (CRUD & settings)
```

---

## 3. Technology Stack

- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS v4 (Integrated via `@tailwindcss/vite` in Vite 6)
- **Animation Engine**: Framer Motion (Imported via `motion/react` for 19.x compatibility)
- **Icons**: Lucide React (`lucide-react`)
- **Compilation/Tooling**: Vite 6, TypeScript 5

---

## 4. Building and Running

Ensure you have **Node.js** installed locally.

| Action | Command | Purpose |
| :--- | :--- | :--- |
| **Install Dependencies** | `npm install` | Restores lockfile-resolved node modules |
| **Run Dev Server** | `npm run dev` | Spins up a local Vite dev server at `http://localhost:3000` |
| **Build Project** | `npm run build` | Compiles source files and bundles static assets to `dist/` |
| **Local Preview** | `npm run preview` | Runs a local server pointing to compiled production assets |
| **Validate Types** | `npm run lint` | Runs `tsc --noEmit` to check for compilation/typing errors |
| **Clean Workspace** | `npm run clean` | Deletes compilation output and temporary scripts |

---

## 5. Development Conventions

### Coordinate Space Mandates
- Slide cards are designed with a **16:9 ratio** size of `1200px` width by `675px` height.
- In `SlidesCanvas.tsx`, they are centered on their absolute coordinates $(x,y)$ using negative absolute margins (`x: -600`, `y: -337.5`).
- Infinite space connections (dashed path lines) are drawn between subsequent slides in sequence order using high-contrast vector lines. Keep this layout sequence order transparent.

### Animation and Cinematic Swoops
- Transition timing configurations (`TRANSITION_CONFIGS` in `SlidesCanvas.tsx`) use highly-refined spring or cubic-bezier tween parameters.
- The `zoom` transition uses a cinematic cubic-bezier curve: `ease: [0.25, 1, 0.4, 1]` over `1.45` seconds, scaling up prior to panning to create a swoop effect.
- Maintain custom `motion/react` properties for smooth spatial panning and zoom matrix translations.

### Layout Automation Templates
When creating or modifying Apps Script macro layouts, match the simulated mathematical behaviors in `GASPanel.tsx` and the local implementations in `App.tsx`:
1. **Spiral Auto-Layout**: Archimedean spiral coordinates based on angle indexes.
2. **Dynamic Grid**: Perfect two-column offsets with row spacing.
3. **Carousel Circle**: Radial math positioning with tangential rotation vectors.
4. **Cosmic Chaos**: Exclude slide 1 (anchor), and randomize and rotate surrounding cards.

### Engineering & Style Rules
- **License Headers**: All source files must begin with the following header:
  ```typescript
  /**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   */
  ```
- **HMR Override Safety**: Do not modify HMR configuration parameters in `vite.config.ts`. File watching and hot-reloading configurations are constrained using the `DISABLE_HMR` environment variable to stabilize IDE performance during automated editing sessions.
- **Type Safety**: Never use `any` casting. Ensure all slide structures conform strictly to the `Slide` interface defined in `src/types.ts`.
- **Vanilla Tailwind v4**: All styling is done in-line using Tailwind CSS v4 class utilities. Do not attempt to load external utility libraries or CSS custom layers without verifying package.json.
