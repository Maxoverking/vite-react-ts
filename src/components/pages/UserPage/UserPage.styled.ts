import styled from "styled-components";
import { SlLogout } from "react-icons/sl";
interface LogOutProps {
  isHover: boolean;
}

export const DIV = styled.div`
  width: 100px;
`;
export const H2 = styled.h2`
  font-family: "Varela Round";
`;

export const BUTTON = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: var(--orange-color);

  &:hover {
    width: 116px;
    border-radius: 40px;
    transition-duration: 0.3s;
    background-color: var(--lettuce-color);
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;
export const LOGOUT = styled.button<LogOutProps>`
  font-family: "Varela Round";
  position: absolute;
  right: ${({ isHover }) => (isHover ? "70%" : "0%")};
  width: 0%;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 0.3s;
`;
export const ICON_OUT = styled(SlLogout)`
  width: 16px;
  height: 16px;
  color: white;
  margin-left: 7px;
`;
