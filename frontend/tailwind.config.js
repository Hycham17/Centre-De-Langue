/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                yellowColor: "var(--yellowColor)",
                blueColor: "var(--blueColor)",
                orangeColor: "var(--orangeColor)",
                blackColor: "var(--blackColor)",
                whiteColor: "var(--whiteColor)",
                iconColor: "var(--iconColor)",
            },
            fontFamily: {
                A: ['"Boldonse"', 'sans-serif'],
                B: ['"Cinzel"', 'serif'],
                C: ['"Creepster"', 'cursive'],
                D: ['"Josefin Sans"', 'sans-serif'],
                E: ['"Lexend"', 'sans-serif'],
                F: ['"Lilita One"', 'cursive'],
                G: ['"Merriweather"', 'serif'],
                H: ['"Montserrat"', 'sans-serif'],
                I: ['"Oxygen"', 'sans-serif'],
                J: ['"Righteous"', 'cursive'],
                K: ['"Titan One"', 'cursive'],
                L: ['"Ubuntu"', 'sans-serif'],
                M:["Readex Pro", "sans-serif"]
              }
        },
    },
    plugins: [],
};
