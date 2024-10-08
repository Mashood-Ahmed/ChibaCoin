/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "p-yellow": "#EC8830",
        "p-red": "#984B22",
        "p-green": "#3E671A",
        "p-skin": "#f3c684",
        "p-dark": "#231F20",
        "p-brown": " #744302",
        "p-white": " #FBFBE9",
      },
      fontFamily: {
        "luckiest-guy-regular": ["var(--font-luckiestguy)"],
        "maladroit-regular": ["var(--font-maladroit)"],
        "yantramanav-regular": ["var(--font-yantramanav-r)"],
        "yantramanav-semibold": ["var(--font-yantramanav-sb)"],
        "yantramanav-bold": ["var(--font-yantramanav-b)"],
      },
    },
  },
  plugins: [],
};
