/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",       // ✅ App Router (your case)
      "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ Shared UI components
    ],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          border: "hsl(var(--border))",
        },
      },
    },
    plugins: [],
  };
  