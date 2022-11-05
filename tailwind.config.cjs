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