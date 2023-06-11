import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DIV = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: var(--purple-color);
  box-shadow: var(--header-shadow);
`;
export const H3 = styled(NavLink)`
  font-family: "Titan One";
  font-size: 25px;
  color: white;
  transition: var(--hover-transition);
  &:hover {
    color: var(--lettuce-color);
  }
  &.active {
    color: var(--lettuce-color);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
export const DIV_HOME = styled.div`
  display: flex;
  gap: 18px;
`;
export const DIV_THEME = styled.div`
  display: flex;
  align-items: center;
`;
export const LI = styled.li`
  display: flex;
  align-items: center;
  gap: 26px;
`;
export const H2 = styled.h2`
  font-family: "Varela Round";
  color: var(--white);
`;

export const AVATAR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #4527a0;
  border-radius: 100px;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const BUTTON = styled(NavLink)`
  font-family: "Varela Round";
  border-radius: 10px;
  padding: 10px 28px;
  background-color: var(--orange-color);
  transition: var(--hover-transition);
  &:hover {
    color: white;
    background-color: var(--lettuce-color);
  }
  &.active {
    color: white;
    background-color: var(--lettuce-color);
  }
`;
