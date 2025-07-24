// tailwind.config.js
module.exports = {
    // ...
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        // เพิ่มไฟล์ที่ใช้ Tailwind ด้วย
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
