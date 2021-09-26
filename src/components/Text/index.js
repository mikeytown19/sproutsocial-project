import * as Styled from './text.styles';

export const Text = ({ children, ...props }) => (
  <Styled.Text {...props}>
    {children}
  </Styled.Text>
);
