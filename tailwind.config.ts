import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1F5B37', light: '#3E8450', dark: '#163523' },
        leaf: { DEFAULT: '#5D9B63', light: '#8ECF84' },
        stem: { DEFAULT: '#7BA65A', dim: '#EEF6E8' },
        soil: { DEFAULT: '#A96F3B', light: '#C98A4D' },
        parchment: '#1E3424',
        cream: '#F9FCF6',
        gold: { DEFAULT: '#D7A84A', dim: '#F0D38C' },
        clay: { DEFAULT: '#C86D3A', dim: '#E08A52' },
        plum: { DEFAULT: '#7E5A67', dim: '#9D7888' },
        lime: '#8FB84F',
        ink: '#253528',
        'ink-soft': '#5F7566',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        drift1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -60px) scale(1.08)' },
        },
        drift2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(0.95)' },
        },
        drift3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 50px) scale(1.05)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        drift1: 'drift1 22s ease-in-out infinite',
        drift2: 'drift2 26s ease-in-out infinite',
        drift3: 'drift3 19s ease-in-out infinite',
        riseIn: 'riseIn 0.7s ease-out both',
        leafSway: 'leafSway 6s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(31, 91, 55, 0.18), 0 8px 20px -14px rgba(31, 91, 55, 0.08)',
        glow: '0 0 0 1px rgba(215,168,74,0.16), 0 16px 34px -16px rgba(215,168,74,0.28)',
      },
    },
  },
  plugins: [],
};

export default config;