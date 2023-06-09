import styled from "styled-components";
import imageHome from "../../../images/home1500.webp";

export const DIV = styled.div`
  height: 100vh;
  background: url(${imageHome}) no-repeat center;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;
