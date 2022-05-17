module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#002C5F",
          200: "#F6F3F2",
          300: "#FFFFFF",
          400: "#000000",
        },
      },
    },
  },
  plugins: [],
};
