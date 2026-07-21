import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1F5B37', light: '#2E7048', dark: '#123320' },
        cream: '#F9FCF6',
        ink: { DEFAULT: '#1E3424', soft: '#4C5A48' },
        gold: { DEFAULT: '#D7A84A', dim: '#B9873B' },
        clay: { DEFAULT: '#C86D3A', dim: '#96502A' },
        plum: { DEFAULT: '#7E5A67', dim: '#5B3A45' },
        lime: '#8FB84F',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        photoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        riseIn: 'riseIn 0.6s ease-out both',
        photoFloat: 'photoFloat 5s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(30,52,36,0.18)',
        glow: '0 0 0 1px rgba(215,168,74,0.25), 0 18px 40px -12px rgba(215,168,74,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
