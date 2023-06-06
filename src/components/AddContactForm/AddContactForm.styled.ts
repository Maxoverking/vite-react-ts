import styled from "styled-components";
import { TextField } from "@mui/material";

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H3 = styled.h3`
  margin-bottom: 20px;
`;
export const INPUT_NAME = styled(TextField)`
  width: 240px;
`;
export const DIV_PHONE = styled.div`
  margin: 16px 0;
`;
export const DIV_BTN = styled.div`
  /* display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 160px;
  height: 62px; */
`;

export const BUTTON = styled.button`
  font-family: "Rodoto";
  width: 150px;
  font-weight: 700;

  background-color: rgba(107, 70, 255, 0.5);
  padding: 12px 16px;
  border-radius: 10px;
  transition: var(--transition-back);
  &:hover {
    color: white;
    box-shadow: 0px 5px 10px -2px rgba(28, 22, 22, 0.8);
    background-color: rgba(107, 70, 255, 0.9);
  }
`;
