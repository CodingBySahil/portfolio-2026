/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./sections/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },

    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#7c3aed",
        accent: "#ec4899",

        background: "#f8fafc",
        surface: "#ffffff",

        body: "#64748b",
        heading: "#0f172a",

        dark: {
          bg: "#020617",
          surface: "#0f172a",
          text: "#f8fafc",
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(37,99,235,.35)",
        card: "0 15px 45px rgba(15,23,42,.12)",
        glass: "0 10px 40px rgba(0,0,0,.18)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#2563eb 0%,#7c3aed 50%,#ec4899 100%)",

        mesh:
          "radial-gradient(circle at top left,#60a5fa,transparent 40%),radial-gradient(circle at bottom right,#a855f7,transparent 40%)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".7",
          },
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },

        spinSlow: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        float: "float 5s ease-in-out infinite",

        glow: "glow 3s ease-in-out infinite",

        slideUp: "slideUp .8s ease forwards",

        pulseSlow: "pulseSlow 6s infinite",

        spinSlow: "spinSlow 12s linear infinite",
      },
    },
  },

  plugins: [],
};