/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-cyber-primary',
    'bg-cyber-secondary',
    'bg-cyber-accent',
    'bg-cyber-highlight',
    'text-cyber-primary',
    'text-cyber-secondary',
    'text-cyber-accent',
    'text-cyber-highlight',
    'text-cyber-warning',
    {
      pattern:
        /bg-cyber-(primary|secondary|accent|highlight|warning)\/(5|10|20|30|40|50|60|70|80|90)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        tech: ['VT323', '"Noto Sans SC"', 'monospace'],
      },
      colors: {
        cyber: {
          primary: '#7B61FF', // 主色调：深紫色
          secondary: '#FF61DC', // 次要色：粉紫色
          accent: '#61FFEA', // 强调色：青色
          dark: '#0a0a0a', // 深色背景
          light: '#2a2a2a', // 浅色背景
          text: '#E0E0E0', // 主要文本色
          highlight: '#FFB561', // 高亮色：金橙色
          warning: '#FFB561',
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #7B61FF, 0 0 10px #7B61FF' },
          '100%': { textShadow: '0 0 20px #7B61FF, 0 0 30px #7B61FF' },
        },
      },
    },
  },
  plugins: [],
};
