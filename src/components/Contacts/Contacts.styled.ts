import styled from "styled-components";
import { BsFillTrash3Fill } from "react-icons/bs";
const DISP_FLEX_ALING_ITEM_CENTER = `
  display: flex;
  align-items: center;
`;

export const DIV_GRID = styled.div`
  margin: 20px 40px;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;
  @media (min-width: 540px) and (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const LI = styled.li`
  background: var(--card-background);
  border-radius: 10px;
  max-width: 500px;
  padding: 16px;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
`;
export const DIV_CONTACT = styled.div`
  ${DISP_FLEX_ALING_ITEM_CENTER}
  justify-content: space-between;
`;
export const CONTACT = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const BUTTON = styled.button`
  ${DISP_FLEX_ALING_ITEM_CENTER}
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 50px;
  background-color: var(--purple-color);
  transition: background-color var(--trasition);
  &:hover {
    background-color: var(--lettuce-color);
  }
`;
export const DELETE_ICON = styled(BsFillTrash3Fill)`
  color: var(--white);
  width: 18px;
  height: 18px;
`;

export const SPAN = styled.span`
  font-family: "Varela Round";
  display: flex;
  font-weight: 700;
  color: var(--white);
`;
