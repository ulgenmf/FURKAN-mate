import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      gradientColorStops: {
        'green-blue-day-blue-600':
          'rgba(48, 69, 201, 1), rgba(101, 190, 218, 1), rgba(154, 211, 127, 1)',
        'day-blue-blue-green-600':
          'rgba(48, 69, 201, 1), rgba(101, 190, 218, 1), rgba(154, 211, 127, 1)',
        'green-blue-day-blue-500':
          'rgba(77, 98, 229, 1), rgba(135, 221, 238, 1), rgba(182, 240, 156, 1)',
        'day-blue-blue-green-500':
          'rgba(77, 98, 229, 1), rgba(135, 221, 238, 1), rgba(182, 240, 156, 1)',
        'green-blue-500': 'rgba(130, 219, 247, 1), rgba(182, 240, 156, 1)',
        'blue-green-500': 'rgba(130, 219, 247, 1), rgba(182, 240, 156, 1)',
        'glass-fill': 'rgba(215, 237, 237, 0.16), rgba(204, 235, 235, 0)'
      },
      fontFamily: {
        GeistSans: ['var(--font-geist-sans),sans'],
        GeistMono: ['var(--font-geist-mono),mono'],
        inter: ['var(--font-sans)', 'sans'],
        roboto: ['var(--font-roboto)', 'sans'],
        firaCode: ['var(--font-firaCode)', 'mono'],
        orbitron: ['var(--font-orbitron)', 'sans'],
        jakarta: ['var(--font-jakarta)', 'sans']
      },
      colors: {
        'noble-black': {
          '0': '#ffffff',
          '100': '#e8e9e9',
          '700': '#131619',
          '200': '#cdcecf',
          '300': '#9b9c9e',
          '400': '#686b6e',
          '500': '#363a3d',
          '600': '#1a1d21',
          '900': '#060708'
        },
        'stem-green': {
          '100': '#f7fdf4',
          '200': '#edfbe6',
          '300': '#dbf7cd',
          '400': '#c8f4b4',
          '500': '#b6f09c',
          '600': '#9ad37f',
          '700': '#739f5f',
          '800': '#4d6a3f',
          '900': '#263520'
        },
        'day-blue': {
          '100': '#ebedfc',
          '200': '#d2d8f9',
          '300': '#a6b0f2',
          '400': '#7989ec',
          '500': '#4d62e5',
          '600': '#3045c9',
          '700': '#243497',
          '800': '#182364'
        },
        'purple-blue': {
          '100': '#f0e8fd',
          '200': '#deccfb',
          '300': '#bd9af8',
          '400': '#9c67f4',
          '500': '#7c35f1',
          '600': '#5f18d4',
          '700': '#47129f',
          '800': '#300c6a',
          '900': '#180635'
        },
        sunglow: {
          '100': '#fffaea',
          '200': '#fff3d1',
          '300': '#ffe8a3',
          '400': '#ffdc75',
          '500': '#ffd147',
          '600': '#e2b42b',
          '700': '#aa8720',
          '800': '#715a15',
          '900': '#392d0b'
        },
        'heisenberg-blue': {
          '100': '#f1fbfe',
          '200': '#e0f6fd',
          '300': '#c0edfb',
          '400': '#a1e4f9',
          '500': '#82dbf7',
          '600': '#65beda',
          '700': '#4c8fa4',
          '800': '#335f6d',
          '900': '#193037'
        },
        'happy-orange': {
          '100': '#fff2e9',
          '600': '#e26f20',
          '900': '#391c08'
        },

        'electric-green': {
          '100': '#f3fbf7',
          '600': '#4ac97e',
          '900': '#122b1d'
        },
        'red-power': {
          '100': '#fbecec',
          '600': '#d0302f',
          '900': '#2f0f0e'
        },

        'neon-green': '#00ff00',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',

        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors]
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}

export default config
