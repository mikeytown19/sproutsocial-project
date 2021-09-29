# SproutSocial Challenge
Using [Gatsby](https://www.gatsbyjs.com/), [Stitches](https://stitches.dev/), as well as [cypress](https://www.cypress.io/) for testing the rendered output of React components.

## Deployment

To start this project run

```bash
  yarn develop
```


To test this project run

```bash
  yarn test
```

  


## File stucture
```
/components
 |
 └── + Header
     |   Header.styles.js
     |   index.js
```
## Styles
If a component has enough custom styles it deserves it's own `{Component}.styles.js` file. 
For simple components like `<Layout />` the styles are small enough to be in the `indes.jsx` file.

```jsx
import { styled } from '../../theme/stiches.config';

export const Layout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled('section', {
  maxWidth: '$5',
  margin: 'auto',
});

```
`stiches.config.js` is where you can define tokens, utils, and more as part of the stiches configuration. 
Check out [Stitches](https://stitches.dev/docs/styling) for more information.

