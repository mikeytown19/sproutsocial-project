import styled from '@emotion/styled';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  width: auto;
  height: 100%;
  border-radius: 4px;
  overflow: auto;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
`;

export const Modal = styled.section`
  z-index: 100;
  width: 100%;
  max-width: 600px;
  max-height: 900px;
  height: 100%;
  border-radius: 4px;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.02);
`;
