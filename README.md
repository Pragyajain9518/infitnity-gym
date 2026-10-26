# Infitnity Gym

Responsive React + Vite implementation of the supplied Infitnity Figma project. All design access was read-only; no Figma nodes, components, or assets were modified.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. `npm run build` creates `dist/`; `npm run preview` serves the production build. `npm run lint` checks JavaScript and React hooks.

## Screens and interactions

| Route           | Design node               | Implementation                                                                                      |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------- |
| `#home`         | `1:2531`, mobile `1:2712` | Hero, statistics, approach, interactive service previews, benefits, controlled testimonial carousel |
| `#services`     | `1:1446`, mobile `1:1854` | Five service panels, desktop GSAP horizontal scroll, mobile accordion, consultation CTA             |
| `#about`        | `1:988`                   | Story, impact, founders, facility, mission, vision, principles, member stories                      |
| `#coaches`      | `1:752`                   | Six coach profiles, expertise tags, consultation CTA                                                |
| `#testimonials` | `1:424`                   | Featured transformation, eight member stories, three video dialogs                                  |
| `#contact`      | `1:615`                   | Validated enquiry form, contact links, social links, illustrated facility map                       |

The source is the copied [Figma file](https://www.figma.com/design/V3JQps56J0TxsXA4YeCueP/Untitled). Services use the horizontal desktop version and the mobile accordion rather than rendering duplicate alternative artboards. The desktop and mobile service artboards disagree on the fourth service (Rehab versus Running); this implementation consistently uses the detailed Rehab content.

The shared navigation supports direct hash links, browser back/forward, and links such as `#coaches/team` without unmounting the current page. The mobile menu supports Escape, focus trapping, and scroll locking. The floating FAQ assistant supports keyboard controls. Reduced-motion preferences disable automatic testimonial rotation and horizontal scroll pinning.

## Assets

Exact source images and SVGs downloaded from Figma are in `public/design/`. `src/assets/design-assets.json` maps each inspected frame's exported asset names to stable local paths. Temporary Figma URLs are never used at runtime. Image cropping and logo clipping follow the supplied node layouts; screenshots are reference material only.

## Dummy integrations

Dummy URLs are used as requested. Copy `.env.example` to `.env.local` to configure real services.

- `VITE_CONTACT_ENDPOINT` defaults to `https://example.com/api/contact`. Example.com URLs activate demo mode: the form validates, shows an explicit demo message, and sends no request. With a real endpoint, it POSTs JSON containing `firstName`, `lastName`, `email`, `phone`, and `message`. Any HTTP 2xx response confirms receipt; non-2xx and network failures show a retry message and preserve the input. The receiving service must provide CORS support, delivery, validation, rate limiting, and spam protection.
- The three video URLs default to Example.com placeholders. These show the exact Figma thumbnail and a coming-soon message. Replace them with browser-playable video URLs to enable native controls.
- The address, phone, email, hours, generic social destinations, and member claims reproduce sample design content. Confirm these before publishing. Contact details and social URLs are configurable in `.env.local`.
- No legal-policy text was supplied. Footer controls open a contact prompt until `VITE_PRIVACY_URL` and `VITE_TERMS_URL` are configured.

All `VITE_*` settings are public client configuration. Do not put credentials or API secrets in them.

## Verification

Build and ESLint checks pass. Browser checks cover desktop page navigation and section links, local image loading, contact validation and demo submission, FAQ expansion and Escape, testimonial controls, video dialogs, and mobile menu/accordion behavior. Dependency updates stay within the existing package ranges and remove the audit findings in the original lockfile.
