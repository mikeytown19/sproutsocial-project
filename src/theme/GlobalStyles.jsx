import { globalCss } from './stiches.config';

export const globalStyles = globalCss({
  html: { m: 0, p: 0, fontFamily: '$body' },
  body: {
    m: 0,
    p: 0,
    fontFamily: '$body',
    '*': {
      fontFamily: '$body',
      boxSizing: 'inherit',
      '&::before,&::after': { boxSizing: 'inherit' },
      '&::-moz-focus-inner': { border: '0' },
    },
  },

  h1: {
    fontWeight: 800,
    fontSize: '$8',
    lineHeight: '$2',
    pb: '0',
  },
  'a, b': {
    color: '$primary',
  },
  'input, select': {
    fontFamily: '$body',
  },
});
