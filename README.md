# 테일윈즈 셋팅

## 1. 설치

npm install -D tailwindcss

npx tailwindcss init

npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer

## 2. 템플릿 경로 설정

tailwind.config에서 content 경로 설정

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 3. CSS 파일에 지시어 추가

@tailwind base;

@tailwind components;

@tailwind utilities;

## 4. postcss.config 파일 생성

```jsx
// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```
