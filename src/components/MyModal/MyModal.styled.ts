import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lauout);
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 310px;
  height: 260px;
  /* max-width: calc(80vw - 340px);
  max-height: calc(80vh - 200px); */
`;
