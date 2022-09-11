/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bold: ["bold"],
                book: ["book"],
                med: ["med"],
                logo: ["logo"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
