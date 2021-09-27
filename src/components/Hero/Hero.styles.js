import { styled } from '../../theme/stiches.config';

export const Hero = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'left',
  input: {
    display: 'block',
    fontWeight: '$2',
    borderRadius: '$pill',
    border: '$lightgray solid 1px',
    maxWidth: '$4',
    width: '100%',
    height: '50px',
    marginTop: '-50px',
    paddingLeft: '50px',
    fontSize: '$6',
    transition: 'border .5s',
    '@bp1': {
      fontSize: '$2',
    },
    '@bp2': {
      fontSize: '$4',
    },
    '&:focus': {
      outline: 'none',
      border: '1px $green solid',
      transition: 'border  .5s',
    },
  },
  label: {
    paddingLeft: '10px',
    display: 'block',
    svg: {
      zIndex: 2,
    },
  },
});
