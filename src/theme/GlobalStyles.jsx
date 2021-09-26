import { globalCss } from './stiches.config';

export const globalStyles = globalCss({
  html: { m: 0, p: 0 },
  body: { m: 0, p: 0, fontFamily: '$body' },
  '*': { margin: 0, padding: 0 },

  h1: {
    fontSize: '$8',
    lineHeight: '$8',
    fontWeight: '900',
    '@bp1': {
      fontSize: '$9',
      lineHeight: '$9',
      fontWeight: '900',
    },
  },
  h2: {
    fontSize: '$7',
    lineHeight: '$7',
    fontWeight: '800',
    '@bp1': {
      fontSize: '$8',
      lineHeight: '$8',

    },
  },
  h3: {
    fontSize: '$6',
    lineHeight: '$6',
    fontWeight: '700',
    '@bp1': {
      fontSize: '$7',
      lineHeight: '$7',

    },
  },
  h4: {
    fontSize: '$5',
    lineHeight: '$5',
    fontWeight: '$bold',
    '@bp1': {
      fontSize: '$6',
      lineHeight: '$6',
    },
  },
  h5: {
    fontSize: '$5',
    lineHeight: '$5',
    fontWeight: '$bold',
  },
  'i,p': {
    fontSize: '$4',
    lineHeight: '$4',
    fontWeight: '$normal',
  },
});

// import React from 'react';
// import { Global, css } from '@emotion/react';
// import { media } from './media';

// const DarkVariables = css`
//       --color-primary: #002138;
//       --color-gray: #DEE1E1;
//       --color-lightblue: #E9F8FF;
//       --color-green: #006B40;
//       --color-yellow:  #FFBC00;
//       --color-text: #273333;
//       --color-text-light: #515E5F;
//       --color-select: #B0B6B7;
// `;

// const GlobalStyles = ({ theme }) => (
//   <Global
//     styles={css`
//       html,
//       body {
//           margin: 0;
//           padding: 0;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//             sans-serif;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//           color: var(--color-text);
//         }

//       * {
//         box-sizing: inherit;
//         &::before,
//         &::after {
//           box-sizing: inherit;
//         }

//         &::-moz-focus-inner {
//           border: 0;
//         }
//       }

//       :root {
//           --color-primary: #002138;
//           --color-gray: #DEE1E1;
//           --color-lightblue: #E9F8FF;
//           --color-green: #006B40;
//           --color-yellow:  #FFBC00;
//           --color-text: #273333;
//           --color-select: #B0B6B7;
//         }

//         h1 {
//           font-weight: 800;
//           font-size: 44px;
//         }

//         //Breakpoints
//         ${Object.entries(theme.breakpoints).map(
//       (item) => `--size-${item[0]}: ${item[1]}`,
//     )}

//         /* SPACING  */
//         ${theme.space.map((spc, index) => `--spacing-${index}: ${spc}px`)}

//           //Radii
//         --radius: ${theme.radii.default}px;
//         --radius-md: 8px;
//         --radius-circle: ${theme.radii.circle}px;

//         //Shadows
//         --shadow-sm: ${theme.shadows.small};
//         --shadow-md: ${theme.shadows.med};
//         --shadow-lg: ${theme.shadows.large};
//         --shadow-xl: ${theme.shadows.xl};
//       }
//     `}
//   />
// );

// export default GlobalStyles;
