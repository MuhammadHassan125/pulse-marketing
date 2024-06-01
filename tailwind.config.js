/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 5px rgba(0, 255, 255, 0.7)',
      },
      filter: {
        invert: 'invert(1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(251.15deg, rgba(255, 255, 255, 0.2) -4.43%, rgba(255, 255, 255, 0.052) 100.18%)',
          'my-blue-gradient': 'linear-gradient(208.08deg, #50A2D4 10.76%, #20658F 65.05%)',
          'my-green-gradient':'linear-gradient(211.71deg, #38A69B 7.22%, #1C6C64 72.98%);',
          'my-purple-gradient' :'linear-gradient(212.82deg, #6C45DB 5.7%, #50A2D4 92.53%);'

      },
    },
  },
  plugins: [],
};
