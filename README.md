# Modern Web Refresh

I am giving you an existing website project that was originally built using Bolt.

I want you to CONTINUE working on this existing project, NOT rebuild it from scratch.

First, inspect and understand the entire codebase, including:

The current page structure

Components

Styling

Fonts

Responsive behavior

Animations

Navigation

Arabic/English language switching

Assets and images

Any existing dependencies

Do not make major changes yet. First understand how the current website is structured.

IMPORTANT RULE

Preserve the existing website's design, layout, colors, images, content, sections, and functionality unless I specifically ask you to change something.

Do not replace the website with a completely different design.

I will give you improvements and fixes one by one, and I want you to modify the existing implementation carefully.

CURRENT GOALS

Make the website typography look modern, premium, and professional rather than like an old 2010 website.

The website supports both Arabic and English.

For Arabic:

Use a modern professional Arabic font such as IBM Plex Sans Arabic.

Make sure RTL is implemented correctly.

Arabic headings and paragraphs must have proper line-height.

Arabic text must never overlap, clip, or collide between lines.

Make the Arabic typography look equally premium compared with the English version.

For English:

Use IBM Plex Sans.

Maintain a clean modern typography hierarchy.

Fix the Arabic hero heading.

Currently, the Arabic hero heading overlaps vertically and looks broken.

Fix the underlying typography/layout issue rather than simply making the text smaller.

The heading must:

Have sufficient line-height.

Wrap naturally.

Never overlap.

Never be clipped.

Work correctly on desktop, tablet, and mobile.

Maintain the premium appearance of the design.

Navigation behavior:

When a user clicks a button or navigation item that points to another section on the same page, the website should smoothly scroll to that section.

I DO NOT mean motion blur.

Do NOT:

Blur the page

Pixelate the page

Distort the page

Add visual motion blur

Instead, the actual webpage should smoothly scroll from the current position to the target section.

The scrolling should be:

Fast

Smooth

Natural

Premium

Similar to modern professional websites

It should not instantly teleport to the target section.

DESIGN QUALITY

The final website should feel like a modern premium website from 2025/2026.

Avoid:

Old-fashioned fonts

Generic default fonts

Excessive bold text

Poor spacing

Cheap-looking animations

Unnecessary effects

Overly complicated UI

Keep the design clean, elegant, professional, and responsive.

DEVELOPMENT RULES

Before changing anything, inspect the existing implementation and reuse the current components/styles where possible.

Do not unnecessarily create duplicate components.

Do not remove existing functionality unless it is directly causing a problem I asked you to fix.

After making changes, check both:

Arabic / RTL

English / LTR

And check:

Desktop

Tablet

Mobile

I will continue giving you specific changes after this, so keep the existing project structure easy to maintain.

Start by analyzing the existing project and tell me briefly what the main structure is and where the typography, language switching, hero section, and navigation are implemented. Do not make unrelated changes.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://refined-site-shine.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/94ae2b71-7201-4c46-8b06-fb0f6f480845).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
