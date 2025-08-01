export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        text: '#f1f5f9',
        heading: '#e2e8f0',
        accent: '#22c55e',
        card: '#1e293b',
        border: '#334155',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}