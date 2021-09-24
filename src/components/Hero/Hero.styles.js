import styled from '@emotion/styled'

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  input {
    display: relative;
    border-radius: 50px;
    border: var(--color-lightgray) solid 1px;
    max-width: 800px;
    width: 100%;
    height: 50px;
    display: block;
    margin-top: -50px;
    padding-left: 50px;
    font-size: 24px;
    transition: border .5s;

    &:focus {
      outline: none;
      border: 1px var(--color-green) solid;
      transition: border  .5s;
    }
  }

  label {
    padding-left: 10px;
    display: block;
    svg {
      z-index: 2;
    }
  }

`


export const Wrapper = styled.div`
  background-color: var(--color-lightblue);
`