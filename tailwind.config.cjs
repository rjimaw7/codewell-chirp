/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        bgColor: "#fbf8f3",
        blueColor: "#3180f5",
        greyColor: "#7b7a7a",
        skyBlueColor: "#d7f5f5",
      },
    },
  },
  plugins: [],
};
