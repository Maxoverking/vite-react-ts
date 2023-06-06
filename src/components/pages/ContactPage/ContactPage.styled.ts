import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

export const DIV_CONTAINER = styled.div`
  height: 100vh;
  padding-top: 100px;
  background: var(--user-page-gradient);
`;
export const DIV = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
`;

export const DIV_NAV = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 16px;
  gap: 20px;
`;
export const ICON = styled(BsPlusCircleFill)`
  width: 32px;
  height: 32px;
  color: var(--purple-color);
  transition-duration: 0.3s;
  &:hover {
    transition-duration: 0.3s;
    color: var(--lettuce-color);
  }
`;
export const H2 = styled.h2``;

export const BUTTON = styled.button`
  display: flex;
  border-radius: 50px;
`;
export const DIV_FILTER = styled.div`
  height: 70px;
  margin-left: 16px;
`;
