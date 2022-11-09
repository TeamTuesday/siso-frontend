module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        30: "120px"
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-in-out",
        "fade-out": "fade-out 0.4s ease-in-out",
        "bounce-in": "bounce-in 0.4s ease-in-out",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "fade-out": { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        "bounce-in": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
          "70%": { transform: "scale(0.95)", },
          "100%": { transform: "scale(1)", },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};