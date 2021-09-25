import styled from '@emotion/styled';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  select {
    border: solid var(--color-select) 1px;
    border-radius: 8px;
    padding: 5px;
    width: 250px;
  }
  `;

export const ListOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ListOptionButton = styled.div`
margin-right: 10px;
  &:hover {
    cursor: pointer
  }
`;
