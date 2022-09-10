/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./public/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bold: ["bold"],
                book: ["book"],
                med: ["med"],
            },
        },
    },
    plugins: [],
};
