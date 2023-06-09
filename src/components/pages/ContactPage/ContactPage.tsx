import { FC, useEffect, useState } from "react";
import MyModal from "../../MyModal/MyModal";
import {
  DIV,
  H2,
  DIV_NAV,
  BUTTON,
  ICON,
  DIV_FILTER,
  DIV_CONTAINER,
  DIV_LOADER,
} from "./ContactPage.styled";
import FilterUser from "../../FilterUser/FilterUser";
import Contacts from "../../Contacts/Contacts";
import { useAppDispatch } from "../../../types/hooks";
import { getContacts } from "../../../redux/contacts/contactOperation";
import { useContactSelector } from "../../../redux/contacts/contactSelector";
import BarLoader from "react-spinners/BarLoader";
import { STATUS } from "../../../status/status";

const ContactPage: FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useContactSelector();
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
            {items.length > 0 ? (
              <DIV_FILTER>
                <FilterUser />
              </DIV_FILTER>
            ) : (
              ""
            )}
          </DIV_NAV>
        </DIV>
        <DIV_LOADER>
          {isLoading === STATUS.loading ? (
            <BarLoader
              color="rgba(107, 70, 255, 0.7)"
              height={3}
              speedMultiplier={1}
              width={80}
            />
          ) : (
            ""
          )}
        </DIV_LOADER>
        <Contacts />
      </DIV_CONTAINER>
    </>
  );
};

export default ContactPage;
