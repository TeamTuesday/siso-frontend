module.exports = {
  content: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Colors
        "logo": "#DDDDDD",
        "primary": { DEFAULT: "#BD8DDB",  variant: "#FAF6FC" },
        "secondary": { DEFAULT: "#FFD952",  variant: "#FFFCF1" },
        "info": { DEFAULT: "#CCCCCC",  variant: "#E7F0F9" },
        "emphasis": { DEFAULT: "#FF7B52",  variant: "#DDDDDD" },

        // Gray scales
        "darkGray": "#222222",
        "middleGray": "#666666",
        "rainyGray": "#999999",
        "gray": "#AAAAAA",
        "lightGray": "#CCCCCC",
        "brightGray": "#DDDDDD",
        "faintGray": "#EEEEEE",

        // Surfaces
        "lightContainer": "#F6F6F6",
        "brightContainer": "#F9F9F9",
        "background": "#FFFFFF",

        // Lines
        "line": "#EEEEEE",
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem',// 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem',// 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
      },
      lineHeight: {
        '2xs': '0.875rem', // 14px
        xs: '1rem', // 16px
        sm: '1.25rem', // 20px
        base: '1.5rem', // 24px
        lg: '1.75rem',// 28px
        xl: '1.875rem', // 30px
        '2xl': '2rem', // 32px
        '3xl': '2.25rem', // 36px
        '4xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
      },

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