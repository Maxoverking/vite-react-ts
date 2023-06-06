import styled from "styled-components";

const DiFx_FxDir_COLUMN = `
  display: flex;
  flex-direction: column;
`;

export const DIV = styled.div`
  position: absolute;
  ${DiFx_FxDir_COLUMN}
  align-items: center;
  top: 18%;
  right: 15%;
  width: 350px;
  height: 370px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 36px -6px rgba(28, 22, 22, 1);
  background: var(--form-color);
`;
export const H2 = styled.h2`
  font-family: "Rodoto";
  font-weight: 700;
  margin-top: 10px;
`;
export const FORM = styled.form`
  ${DiFx_FxDir_COLUMN}
  height: 100%;
  width: 250px;
`;

export const DIV_BTN = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const BUTTON = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Rodoto";
  width: 150px;
  font-weight: 700;

  margin-bottom: 20px;
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
