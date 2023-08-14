/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
   
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
 
    require("daisyui"),
    require("flowbite/plugin")
    
    

  ],


  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

