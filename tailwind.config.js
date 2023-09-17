// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/preline/dist/*.js',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     // require("preline/plugin").default  
//     require("preline/plugin"),
//     require("@material-tailwind/react/utils/withMT"),
//   ],  
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});