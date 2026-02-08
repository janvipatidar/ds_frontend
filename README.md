# Placement Company Website

A modern, responsive React website built with Vite, featuring smooth animations and comprehensive placement services.

## Tech Stack

- React (Vite)
- JavaScript
- Tailwind CSS
- Material UI (MUI)
- Framer Motion
- EmailJS
- React Router DOM

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the configuration in `src/utils/emailjs.js`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key

## Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── Hero.jsx
 │    ├── FeatureCard.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    ├── Services.jsx
 │    ├── Contact.jsx
 ├── layout/
 │    └── MainLayout.jsx
 ├── utils/
 │    └── emailjs.js
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

## Features

- Responsive design
- Smooth page transitions
- Animated components
- Contact form with EmailJS integration
- Modern UI with Tailwind CSS and Material UI
