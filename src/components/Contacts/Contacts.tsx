import { FC } from "react";
import {
  BUTTON,
  CONTACT,
  DELETE_ICON,
  DIV_CONTACT,
  DIV_GRID,
  LI,
  SPAN,
} from "./Contacts.styled";

const Contacts: FC = () => {
  return (
    <DIV_GRID>
      <ul>
        <LI>
          <DIV_CONTACT>
            <CONTACT>
              <SPAN>Name : FFFFFFFFFFF</SPAN>
              <SPAN>Number : 123545646324</SPAN>
            </CONTACT>

            <BUTTON type="button">
              <DELETE_ICON />
            </BUTTON>
          </DIV_CONTACT>
        </LI>
      </ul>
    </DIV_GRID>
  );
};
export default Contacts;
