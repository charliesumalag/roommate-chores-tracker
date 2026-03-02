/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- include all React component files
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'], // JetBrains Mono for monospace
        custom: ['"JetBrains Mono"', 'monospace'],               // optional custom class
      },
    },
  },
  plugins: [],
}
