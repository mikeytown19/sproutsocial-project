import theme from './theme';

export const media = Object.entries(theme.breakpoints).reduce((all, key) => {
  all[key[0]] = `@media only screen and (max-width: ${key[1]})`;
  return all;
}, {});
