
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        'h-1': '1',
        'w-1': '1',
      },
      colors: {
        'antique-gold': '#b8860b',
        'aged-paper': '#f5f0e1',
        'rich-mahogany': '#420d09',
        'patina': '#669999',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'antiquity-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2Y1ZjBlMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMjBMMzAgNDBMNDAgNDBMNDAgMjAgWiIgZmlsbD0iI2I4ODYwYiIgZmlsbC1vcGFjaXR5PSIwLjAzIj48L3BhdGg+CjxwYXRoIGQ9Ik0yMCAyMEwyMCA0MEwzMCA0MEwzMCAyMCBaIiBmaWxsPSIjNDIwZDA5IiBmaWxsLW9wYWNpdHk9IjAuMDMiPjwvcGF0aD4KPC9zdmc+')",
      },
    },
  },
  safelist: [
    // Add any classes that are dynamically created and need to be preserved here
  ],
  plugins: [],
}
