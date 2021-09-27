import { styled } from '../../theme/stiches.config';

export const OptionsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px 10px',
  alignItems: 'center',
  select: {
    border: 'solid $lightgray 1px',
    borderRadius: '8px',
    width: '250px',

  },
});

export const ListOptionContainer = styled('div',
  { display: 'flex', alignItems: 'center' });

export const ListOptionButton = styled('div',
  {
    marginRight: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  });
