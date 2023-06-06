import { AnyAction } from "@reduxjs/toolkit";
import { ContactsState } from "../../types/storeStateInterface";
import { STATUS } from "../../status/status";
import { NewContact } from "../../types/contacts";

export const initContactsState: ContactsState = {
  item: [],
  isLoading: STATUS.idle,
  error: null,
};

export const contactsReducer = (
  state: ContactsState = initContactsState,
  { type, payload }: AnyAction
): ContactsState => {
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        item: [...state.item, payload as NewContact],
      };
    case "LOAD":
      return {
        ...state,
        isLoading: payload as string,
      };
    default:
      return state;
  }
};

// interface contactsAction {
//   type: string;
//   payload: NewContact | string;
// }
