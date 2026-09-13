/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: {
          pink: '#F472B6',
          purple: '#A78BFA',
          blue: '#3B82F6',
        },
        dark: {
          bg: '#0A0A0E',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#F3F4F6',
          muted: '#9CA3AF',
        },
        light: {
          bg: '#FAFAFC',
          card: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(0, 0, 0, 0.06)',
          text: '#111827',
          muted: '#6B7280',
        }
      },
      animation: {
        'marquee-left': 'marqueeLeft 30s linear infinite',
        'marquee-right': 'marqueeRight 30s linear infinite',
        'marquee-row1': 'marqueeRight 35s linear infinite',
        'marquee-row2': 'marqueeLeft 40s linear infinite',
        'marquee-row3': 'marqueeRight 32s linear infinite',
        'marquee-row4': 'marqueeLeft 45s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
