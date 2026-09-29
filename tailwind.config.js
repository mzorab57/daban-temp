/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  corePlugins: {
    preflight: false, // Completely disable Tailwind's CSS reset
  },
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0A142C',
        'deep-blue': '#112D6B',
        'primary-blue': '#214C9A',
        'medium-blue': '#4D6EA3',
        'light-blue': '#6095D2',
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
  important: '#root',
}
