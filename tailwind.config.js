module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        "light-bg": "#f8f8f8",
        "dark-bg": "rgb(16, 24, 42)",
        "modal-bg": "#151D21",
        "offwhite-bg": "#f3f5f7",
        "dark-sidebar-background": "#121619",
        "dark-background-secondary": "#171717",
        "dark-background": "#121212",
        "dark-divider": "rgba(255,255,255,0.12)",
        "dark-action-active": "#fff",
        "dark-action-disabled": "rgba(255,255,255,0.3)",
        "dark-action-hover": "rgba(255,255,255,0.08)",
        "dark-action-hover-secondary": "rgba(255,255,255,0.04)",
        "dark-action-disabled-background": "rgba(255, 255, 255, 0.12)",
        "dark-action-selected": "rgba(255, 255, 255, 0.16)",
        "dark-primary": "#fff",
        "dark-text-primary": "#fff",
        // text-slate-400
        "dark-text-secondary": "#94a3b8",
        "dark-text-disabled": "rgba(255, 255, 255, 0.5)",
        "light-text-primary": "rgba(0, 0, 0, 0.87)",
        "light-text-secondary": "#54707F",
        "light-text-disabled": "rgba(0, 0, 0, 0.38)",
        "light-action-active": "rgba(0, 0, 0, 0.54)",
        "light-action-disabled": "rgba(0, 0, 0, 0.36)",
        "light-action-hover": "rgba(0, 0, 50, 0.08)",
        "light-action-hover-secondary": "rgba(0, 0, 0, 0.04)",
        "light-action-disabled-background": "rgba(0, 0, 0, 0.12)",
        "light-action-selected": "#DEE5E9",
        "light-background": "#f8f8f8",
        "light-background-secondary": "#DEE5E9",
        "light-divider": "rgba(0, 0, 0, 0.12)",

        // For footer & sidebar
        "darkmode-bg-secondary": "#252525",
        "textcolor-lightmode": "#151D21",
        "textcolor-dark": " #CCCCCCCC",
        "gray-dark": "#283B45",
        "green-success": "#13ce66",
        "red-warning": "#C25050",
        "blue-checkmark": "#0072DB",

        // Home Gradient
        "home-gr-blue": "#5594D6",
        "home-gr-pink": "#D21B9A",
        // Button Gradient
        "btn-gr-pink": "#88248D",
        "btn-gr-blue": "#52CECE",
        // Other
        "fillcolor-light": "#2A363D",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideOut: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(-200%%)" },
        },
      },
      animation: {
        slideIn: "slideIn .5s",
        slideOut: "slideOut .5s",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
