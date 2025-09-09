// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 이 경로 꼭 확인
  ],
  theme: {
    extend: {
      fontFamily: {
        NangyangSpecial: ["NangyangSpecial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
