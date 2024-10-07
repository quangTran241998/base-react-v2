/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        greenMain: "#2dbe60",
        desc: "#4c4d4d",
        yellow: "#CC8F14",
        colorPrimaryBg: "#333",
        //
        primaryBase: "#e4262b",
        secondaryBase: "#f4b321",
        successBase: "#00b141",
        warningBase: "#ff831e",
        errorBase: "#e60a32",
        infoBase: "#2f74ff",
      },
      borderColor: {
        default: "#DDDDDD",
        disabled: "#EBEBEB",
        outlineYellow: "#CC8F14",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      //namnh
      width: {
        "12/17": "70.58824%",
      },
      //namnh
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        xs: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "banner-experience-service": "url('/src/assets/images/bg/bg-experience.png')",
        "intro-icon": "url('/src/assets/images/bg/intro-icon.png')",
        "bg-intro-home": "url('/src/assets/images/bg/bg-intro-home.png')",
      },
      backgroundColor: {
        primary: "#e4262b",
        secondary: "#f4b321",
        success: "#00b141",
        warning: "#ff831e",
        error: "#e60a32",
        info: "#2f74ff",
        default: "#f5f5f5",
        container: "#f5f5f5",
        "active-nav-bar": "red",
        "hover-nav-bar": "#e5e7eb",
        "header-table": "#EBEBEB",
      },
      lineHeight: {
        textForm: "22px",
      },
      boxShadow: {
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 3px 8px 0px rgba(0, 0, 0, 0.10)",
        customerReview: "0px 7px 14px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
