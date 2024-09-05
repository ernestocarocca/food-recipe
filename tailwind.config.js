const {nextui} = require('@nextui-org/theme');
const { color } = require("framer-motion");
const { text } = require("stream/consumers");

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(badge|button|link|popover|progress|select|user|ripple|spinner|listbox|divider|scroll-shadow|avatar).js"
  ],
  theme: {
    screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
    },
    extend: {
      colors: {
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))"
      }
    }
  },
  plugins: [nextui()]
};
