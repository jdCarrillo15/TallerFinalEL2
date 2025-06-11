// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'sans-serif'],
      },
      colors: {
        soft: '#f9fafb',     // ✅ fondo claro suave
        primary: '#4f46e5',  // índigo
        accent: '#10b981',   // verde bonito
        danger: '#ef4444',   // rojo para eliminar
      },
    },
  },
  plugins: [],
}
