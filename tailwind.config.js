/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ff477a",
          200: "#ec3668",
        },
        secondary: {
          100: "#3e6fea",
          200: "#3f0de7",
          300: "#431ccd",
        },
        neutral: {
          100: "#fbfdfb",
          200: "#f7f5f6",
          300: "#f3f1f2",
          400: "#84818d",
          500: "#161128",
        },
        error: "#ff3b30",
        success: "#34c759",
        warning: "#ffc107",
      },
      backgroundImage: {
        "noise-gradient": "url('/img/noise-gradient.png')",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        atype: ["Atype Display", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        xxs: ["0.625rem", "1rem"],
        "5/2xl": ["1.75rem", "2.25rem"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
