/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#8874CC', // Reemplaza con tu código de color personalizado
        'purple-light': '#4100CC', // Reemplaza con tu código de color personalizado
        'yellow-dark': '#D1C97D', // Reemplaza con tu código de color personalizado
        'yellow-light': '#CCC600', // Reemplaza con tu código de color personalizado
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
};