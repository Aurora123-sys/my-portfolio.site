# Ravi Yoshitomo Tsunenori — Portfolio

A multi-page, animated portfolio built with Next.js 15 App Router, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 15.5 (App Router, RSC, static prerender)
- **Type system:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.4 + custom design tokens (cream / aurora pastel + midnight)
- **Motion:** Framer Motion, Lenis (smooth scroll), CSS keyframes, GSAP available
- **Type:** variable Fraunces + Inter + JetBrains Mono via `next/font/google`

## Pages

| Route       | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `/`         | Landing — animated canvas aurora hero, stats, services, work   |
| `/about`    | Story, journey timeline, languages, certifications             |
| `/work`     | Featured projects with SVG mockups + role archive              |
| `/skills`   | 7-card skills matrix + working principles                      |
| `/contact`  | Contact form, methods, availability                            |

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

All five routes are prerendered as static content. First Load JS is ≤ 152 kB on the heaviest route.

## Project layout

```
src/
├── app/                  # App Router pages + globals.css
├── components/           # Reusable UI (Nav, Footer, AuroraCanvas, …)
└── lib/data.ts           # All site copy in one place
public/
└── avatar.png            # Portrait
```

## Highlights

- Live canvas **aurora mesh** background with parallax + particle field
- **Lenis** smooth scroll, **Framer Motion** reveals + spring tilt portrait
- **Pill nav** with backdrop-blur on scroll, full-screen mobile menu
- **Custom cursor** (difference-blend, expands on interactives)
- **Counter** ease-out cubic count-up on stats
- **Marquee** with edge mask, **LangBar** intersection-fill, hand-built **SVG project mocks**
- Variable-font display headings using Fraunces optical-size + softness axes

## License

Personal portfolio — content © Ravi Yoshitomo Tsunenori.
