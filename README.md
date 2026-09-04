# Carshi Restaurant Website

A responsive restaurant website that presents a Somali food menu, supports a local cart, and provides a table reservation interface.

## Features

1. A landing page with navigation, hero, menu, reservation, testimonials, and footer sections.
2. Four menu categories: breakfast, lunch, dinner, and drinks.
3. Client side cart management with a slide out cart drawer.
4. Responsive layouts and motion based interface transitions.
5. A reservation form that collects customer information and displays a local confirmation state.

## Technology

The frontend uses React 19, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React.

## Project Structure

1. `src/components` holds presentation components for the restaurant interface.
2. `src/context/CartContext.tsx` manages cart state.
3. `src/data.ts` defines the menu items and testimonials.
4. `src/types.ts` defines shared TypeScript types.

## Run Locally

Node.js and npm are required.

```bash
npm install
npm run dev
```

The development server is configured for port 3000. Create a production build with `npm run build`, preview it with `npm run preview`, and run TypeScript checks with `npm run lint`.

## Current Limitations

This is a frontend only project. The cart is not connected to an ordering or payment service, and reservations are not sent to a backend. Menu imagery is loaded from Unsplash URLs and the menu, testimonials, and contact information are stored in source code.
