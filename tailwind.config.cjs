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
        "bounce-in": "bounce-in 0.4s",
        "bounce-in-reverse": "bounce-in 0.4s reverse forwards",
        "bounce-up": "bounce-up 0.4s",
        "bounce-up-reverse": "bounce-up 0.4s reverse forwards",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "fade-out": { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        "bounce-in": {
          "0%": { opacity: 0,  transform: "scale(0.9)" },
          "60%": { opacity: 1,  transform: "scale(1.05)" },
          "100%": { opacity: 1,  transform: "scale(1)" },
        },
        "bounce-up": {
          "0%": { transform: "translateY(50px)" },
          "60%": { transform: "translateY(-7px)" },
          "100%": { transform: "translateY(0)" },
        }
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