/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        gold: {
          400: '#f5d58f',
          500: '#d4af37',
          600: '#b28e20',
        },
        amber: {
          500: '#f5a623',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'sound-wave-1': 'soundWave 1.2s ease-in-out infinite',
        'sound-wave-2': 'soundWave 1.2s ease-in-out 0.2s infinite',
        'sound-wave-3': 'soundWave 1.2s ease-in-out 0.4s infinite',
        'sound-wave-4': 'soundWave 1.2s ease-in-out 0.1s infinite',
        'sound-wave-5': 'soundWave 1.2s ease-in-out 0.3s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        soundWave: {
          '0%, 100%': { height: '8px', opacity: '0.6' },
          '50%': { height: '24px', opacity: '1' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(8deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-6deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.15)' },
        },
      }
    },
  },
  plugins: [],
}
