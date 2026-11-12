# Manvendra Development — Next.js website

A responsive creative-agency website built with Next.js 14, React, TypeScript and custom CSS. The updated visual system combines neumorphic surfaces, clay-inspired 3D forms, tactile skeuomorphic controls and spatial depth effects. Typography uses Inter, Roboto and Poppins.

## Requirements
- Node.js 18.17 or newer
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Before publishing
- Replace the sample brand artwork/visual treatment with your final logo if available.
- Add real portfolio projects and project images.
- Add your business phone/WhatsApp number and social profile URLs.
- The contact form currently opens the visitor's default email app using `mailto:`. For a production website, connect it to an API/email service so enquiries can be submitted without an email app.
- Confirm the online class fee and course details before publishing.

## Main files
- `app/page.tsx` — homepage route
- `app/layout.tsx` — metadata and document layout
- `app/globals.css` — responsive visual design
- `components/site.tsx` — page sections, navigation and enquiry form
