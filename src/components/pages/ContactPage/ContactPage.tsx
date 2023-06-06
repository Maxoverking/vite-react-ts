import { FC, useState } from "react";
import MyModal from "../../MyModal/MyModal";
import {
  DIV,
  H2,
  DIV_NAV,
  BUTTON,
  ICON,
  DIV_FILTER,
  DIV_CONTAINER,
} from "./ContactPage.styled";
import FilterUser from "../../FilterUser/FilterUser";
import Contacts from "../../Contacts/Contacts";

const ContactPage: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalShow = (): void => {
    setShowModal((prevModal) => !prevModal);
  };

  return (
    <>
      <DIV_CONTAINER>
        <DIV>
          <DIV_NAV>
            <H2>MY PHONEBOOK</H2>
            <BUTTON type="button" onClick={modalShow}>
              <ICON />
            </BUTTON>
            {showModal ? <MyModal modalShow={modalShow} /> : ""}
            <DIV_FILTER>
              <FilterUser />
            </DIV_FILTER>
          </DIV_NAV>
        </DIV>
        <Contacts />
      </DIV_CONTAINER>
    </>
  );
};

export default ContactPage;
