# Carshi Restaurant Website

A responsive restaurant website built with React and TypeScript to present Somali cuisine, manage a shopping cart, and provide a table reservation interface.

## Overview

The application provides a restaurant landing page with navigation, a hero section, categorized food and drink menus, cart functionality, table reservation forms, customer testimonials, and a footer.

The menu currently includes Somali breakfast, lunch, dinner, and drink options. Menu items include images, descriptions, prices, and categories.

## Features

1. Responsive restaurant landing page
2. Categorized food and drink menu
3. Add to cart functionality
4. Cart drawer for selected menu items
5. Table reservation form
6. Customer testimonials section
7. Responsive navigation
8. Animated interface transitions
9. Mobile and desktop layouts

## Menu Categories

1. Breakfast
2. Lunch
3. Dinner
4. Drinks

The menu includes dishes such as Anjeero with Beef Suqaar, Malawax, Bariis Iskukaris with Goat Meat, Pasta Salato, Fish, Chapati, Grilled Chicken, fresh juices, and Shaah Carays.

## Technology

The project is built with React 19 and TypeScript and uses Vite for development and production builds.

Main libraries and tools include:

1. React
2. TypeScript
3. Vite
4. Tailwind CSS
5. Motion
6. Lucide React
7. Express

## Project Structure

The application source is organized into reusable React components and supporting modules.

```text
src/
├── components/
│   ├── Navigation
│   ├── Hero
│   ├── MenuSection
│   ├── CartDrawer
│   ├── ReservationSection
│   ├── TestimonialsSlider
│   └── Footer
├── context/
│   └── CartContext
├── data.ts
├── types.ts
└── App.tsx
```

## Requirements

Node.js and npm are required to run the project locally.

## Installation

```bash
git clone https://github.com/hassankaafi72/Carshi-Restaurant-Webiste.git
cd Carshi-Restaurant-Webiste
npm install
```

## Development

Start the development server with:

```bash
npm run dev
```

The project is configured to run the Vite development server on port 3000.

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Type Checking

Run the TypeScript check with:

```bash
npm run lint
```

## Reservation Flow

The reservation interface collects the requested date, time, number of guests, customer name, and phone number. The current implementation displays a confirmation state locally and does not submit reservation data to a backend service.

## Cart Flow

Users can browse menu categories and add menu items to the cart. Cart state is managed through the application's `CartContext` and displayed through the cart drawer.
