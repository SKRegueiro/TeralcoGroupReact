module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        m: '1rem',
      },
      borderWidth: {
        12: '12px',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '40px',
        xxl: '48px',
        xxxl: '56px',
        xxxxl: '64px',
        xxxxxl: '128px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
