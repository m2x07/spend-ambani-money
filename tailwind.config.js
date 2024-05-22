/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                fg: "var(--fg)",
                bg: "var(--bg)",
                secondary: "var(--bg2)",
                muted: "var(--muted)",
                border: "var(--border)",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                narrow: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [],
};
