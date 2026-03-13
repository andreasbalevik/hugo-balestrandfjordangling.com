/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          text: '#1f2c3d',
        },
      },
      textColor: {
        DEFAULT: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        // Digdir heading-skala med riktig letter-spacing og line-height
        'heading-2xs': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.0015em', fontWeight: '500' }],
        'heading-xs':  ['1rem',     { lineHeight: '1.3', letterSpacing: '0.0015em', fontWeight: '500' }],
        'heading-sm':  ['1.125rem', { lineHeight: '1.3', letterSpacing: '0em',      fontWeight: '500' }],
        'heading-md':  ['1.25rem',  { lineHeight: '1.3', letterSpacing: '-0.0025em',fontWeight: '500' }],
        'heading-lg':  ['1.5rem',   { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '500' }],
        'heading-xl':  ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em',  fontWeight: '500' }],
        'heading-2xl': ['2.25rem',  { lineHeight: '1.3', letterSpacing: '-0.01em',  fontWeight: '500' }],
      },
      // Digdir skygge-skala
      boxShadow: {
        'ds-xs': '0 0 1px 0 rgba(0,0,0,0.16), 0 1px 2px 0 rgba(0,0,0,0.12)',
        'ds-sm': '0 0 1px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.1)',
        'ds-md': '0 0 1px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.12)',
        'ds-lg': '0 0 1px 0 rgba(0,0,0,0.13), 0 3px 5px 0 rgba(0,0,0,0.13), 0 6px 12px 0 rgba(0,0,0,0.14)',
        'ds-xl': '0 0 1px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.16), 0 12px 24px 0 rgba(0,0,0,0.16)',
      },
      // Digdir border-radius-skala
      borderRadius: {
        'ds-sm':   '0.125rem',
        'ds-md':   '0.25rem',
        'ds-lg':   '0.5rem',
        'ds-xl':   '0.75rem',
        'ds-full': '9999px',
      },
      // Digdir disabled-opasitet
      opacity: {
        'disabled': '0.3',
      },
    },
  },
}
