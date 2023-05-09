const globalStyles = ({ addBase, config }) => {
  addBase({
    a: {
      color: config('theme.textColor.primary'),
      textDecoration: 'none',
      borderBottom: '1px solid transparent',
      transition: '0.2s ease',
    },
    'a:hover': {
      borderColor: config('theme.borderColor.primary'),
      color: config('theme.colors.primary.700'),
    },
    p: {
      marginBottom: config('theme.margin.3'),
      lineHeight: config('theme.lineHeight.normal'),
    },
    'h1, h2, h3, h4, h5': {
      marginBottom: config('theme.margin.2'),
      lineHeight: config('theme.lineHeight.tight'),
    },
    h1: { fontSize: config('theme.fontSize.5xl') },
    h2: { fontSize: config('theme.fontSize.4xl') },
    h3: { fontSize: config('theme.fontSize.3xl') },
    h4: { fontSize: config('theme.fontSize.2xl') },
    h5: { fontSize: config('theme.fontSize.xl') },
    'ol, ul': { paddingLeft: config('theme.padding.4') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
  });
};

const customContainer = ({ addComponents }) => {
  addComponents({
    '.container': {
      maxWidth: '100%',
      '@screen sm': {
        maxWidth: '640px',
      },
      '@screen md': {
        maxWidth: '768px',
      },
      '@screen lg': {
        maxWidth: '1024px',
      },
      '@screen xl': {
        maxWidth: '1280px',
      },
      '@screen 2xl': {
        maxWidth: '1280px',
      },
    },
  });
};

module.exports = {
  content: ['./src/**/*.{js,html,njk}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      minHeight: {
        80: '80vh',
        70: '70vh',
        60: '60vh',
        50: '50vh',
      },
      colors: {
        blue: {
          900: '#072E47', // dark
          700: '#3575BB', //Darker
          500: '#6F8FAC', // mid
          400: '#03A9F4',
          300: '#B2C0D2', //damp
          200: '#E6F6FE', // extralight
          danger: '#E46363 ',
        },
        white: '#fff',
        black: '#111',
        transparent: 'transparent',
        ternary: '#fcfcfc',
        teal: {
          default: '#44B6AE',
          light: '#CDDFE6',
        },
        warning: '#FFBD72',
        'semi-dark': '#5B5B5B',
        grey: {
          darkest: '#424242',
          darker: '#9C9C9C',
          darken: '#9C9C9C',
          bg: '#F7FAFC',
          lighter: '#EBEBEB',
          lighest: '#F2F2F2',
          ternary: '#FCFCFC',
          'semi-dark': '#5B5B5B',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          500: '#64748B',
          600: '#475569',
        },
        neutral: {
          500: '#7A7A7A',
        },
      },
      transitionProperty: {
        height: 'height',
      },
    },
    shadows: {
      outline: '0 0 0 3px rgba(82,93,220,0.3)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [globalStyles, customContainer],
};
