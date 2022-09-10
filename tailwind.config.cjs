/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    plugins: [],
};
