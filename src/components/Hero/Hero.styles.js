import { styled } from '../../theme/stiches.config';

export const Hero = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'left',
  input: {
    display: 'block',
    color: '$lightgray',
    fontWeight: '$2',
    borderRadius: '50px',
    border: '$lightgray solid 1px',
    maxWidth: '800px',
    width: '100%',
    height: '50px',
    marginTop: '-50px',
    paddingLeft: '50px',
    fontSize: '$6',
    transition: 'border .5s',
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
