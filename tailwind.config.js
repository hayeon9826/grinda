module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#ebeefe",
                    200: "#b1bdfe",
                    300: "#778bfe",
                    400: "#506afe",
                    500: "#3d5afe",
                    600: "#3048cb",
                    700: "#243698",
                    800: "#1e2d7f",
                    900: "#182465",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
