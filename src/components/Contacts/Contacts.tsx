import { FC, useMemo } from "react";
import {
  BUTTON,
  CONTACT,
  DELETE_ICON,
  DIV_CONTACT,
  DIV_GRID,
  Ul,
  LI,
  SPAN,
} from "./Contacts.styled";
import { useContactSelector } from "../../redux/contacts/contactSelector";
import { useAppDispatch } from "../../types/hooks";
import { deleteContact } from "../../redux/contacts/contactOperation";
import { useFilterSelector } from "../../redux/filter/filterSelector";
import { NewContact } from "../../types/contacts";

const filterContacts = (items: NewContact[], filter: string): NewContact[] => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((contact: NewContact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const Contacts: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useContactSelector();
  const { filter } = useFilterSelector();

  const filteredContacts = useMemo(
    () => filterContacts(items, filter),
    [items, filter]
  );

  return (
    <DIV_GRID>
      <Ul>
        {filteredContacts.map(({ name, number, id }) => (
          <LI key={id}>
            <DIV_CONTACT>
              <CONTACT>
                <SPAN>Name : {name}</SPAN>
                <SPAN>Number : {number}</SPAN>
              </CONTACT>

              <BUTTON type="button" onClick={() => dispatch(deleteContact(id))}>
                <DELETE_ICON />
              </BUTTON>
            </DIV_CONTACT>
          </LI>
        ))}
      </Ul>
    </DIV_GRID>
  );
};
export default Contacts;
