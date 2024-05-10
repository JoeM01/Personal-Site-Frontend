/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "background": "#343a3d",
        "text": "#ecefee",
        "accent-1": "#69bddd",
        "accent-2": "#ee6f56",
      },
      fontSize: {
        'base': '18px',   // Base font size for Body text
        'small': '16px',     // Smaller text
        'heading': '32px',     // Larger text for headings
      },
      fontFamily: {
        heading: ['Karla', 'sans-serif'],
        body: ['Inconsolata', 'monospace'],
    },
    screens: {         
      'xxl': '2600px',       
              },
  },
  plugins: [],
}
}