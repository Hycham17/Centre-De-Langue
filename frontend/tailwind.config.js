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
            },
        },
    },
    plugins: [],
};
