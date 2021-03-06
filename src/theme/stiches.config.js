import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      primary: '#002138',
      textLight: '#515E5F',
      lightgray: '#B0B6B7',
      gray: '#DEE1E1',
      lightblue: '#E9F8FF',
      green: '#006B40',
      yellow: '#FFBC00',
      text: '#273333',
      muted: '#f6f6f6',
      white: '#fff',
    },
    fonts: {
      body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontSizes: {
      1: '11px',
      2: '13px',
      3: '16px',
      4: '18px',
      5: '21px',
      6: '24px',
      7: '32px',
      8: '40px',
    },
    fontWeights: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
      light: '$2',
      normal: '$4',
      bold: '$7',
      extraBold: '$9',
    },
    lineHeights: {
      1: '18px',
      2: '21px',
      3: '24px',
      4: '26px',
      5: '29px',
      6: '32px',
      7: '40px',
      8: '50px',
    },
    shadows: {
      1: '0 0 12px rgba(0, 0, 0, .25)',
      2: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    },
    space: {
      1: '0.3rem',
      2: '0.5rem',
      3: '0.8rem',
      4: '1rem',
      5: '1.1rem',
      6: '1.4rem',
      7: '1.8rem',
      8: '2rem',
      9: '3rem',
      10: '4rem',
      11: '5rem',
      12: '7rem',
    },
    sizes: {
      1: '320px',
      2: '530px',
      3: '900px',
      4: '1100px',
      5: '1440px',
    },

    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '0.8rem',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(max-width: 530px)',
    bp2: '(max-width: 900px)',
    bp3: '(max-width: 1100px)',
    bp4: '(max-width: 1440px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value) => ({ textAlign: value }),
    fd: (value) => ({ flexDirection: value }),
    fw: (value) => ({ flexWrap: value }),
    ai: (value) => ({ alignItems: value }),
    ac: (value) => ({ alignContent: value }),
    ji: (value) => ({ justifyItems: value }),
    jc: (value) => ({ justifyContent: value }),
    as: (value) => ({ alignSelf: value }),
    fs: (value) => ({ fontSize: value }),
    bg: (value) => ({ backgroundColor: value }),
    bb: (value) => ({ borderBottom: value }),
    br: (value) => ({ borderRadius: value }),
    btrr: (value) => ({ borderTopRightRadius: value }),
    bbrr: (value) => ({ borderBottomRightRadius: value }),
    bblr: (value) => ({ borderBottomLeftRadius: value }),
    btlr: (value) => ({ borderTopLeftRadius: value }),
    bs: (value) => ({ boxShadow: value }),
    lh: (value) => ({ lineHeight: value }),
    size: (value) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(to bottom right,${value}, rgba(37,99,235,0))`,
    }),

  },
});

export const breakpoints = {
  default: (rule) => rule,
  bp1: (rule) => `@media (max-width: 520px) { ${rule} }`,
  bp2: (rule) => `@media (max-width: 900px) { ${rule} }`,
  bp3: (rule) => `@media (max-width: 1200px) { ${rule} }`,
  bp4: (rule) => `@media (max-width: 1800px) { ${rule} }`,
};

export const {
  styled,
  css,
  globalCss,
  getCssText,
} = stitches;
