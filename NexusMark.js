/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E10",
        ink2: "#17171A",
        gold: "#C9A227",
        goldlight: "#E4C766",
        cream: "#F5F1E8",
        slate: "#9A988F",
        line: "#2A2A2D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-fade": "linear-gradient(135deg, #C9A227 0%, #E4C766 100%)",
      },
    },
  },
  plugins: [],
};
