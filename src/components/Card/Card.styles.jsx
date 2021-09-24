import styled from '@emotion/styled'

export const Card = styled.div`
`
export const CardTop = styled.div`
img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: transform .5s;
}

`
export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 8px;
  border: solid var(--color-gray) 1px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
  padding: 0 30px;

  justify-content: center;
  gap: 20px;
`