{import('tailwindcss').Config} 

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], 
    theme: {
        extends: {
            fontfamily: {
                sans: ['Roboto', 'sans-serif'], // Default font family
            },
            gridTemplateColumns: {
                '70/30': '70% 28%  ', // Update to 70% and 30%
            },
        },
    },
    plugins: [],
}