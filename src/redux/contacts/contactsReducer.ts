import { createSlice } from "@reduxjs/toolkit";
import { ContactsState } from "../../types/storeStateInterface";
import { STATUS } from "../../status/status";
import { addContacts, deleteContact, getContacts } from "./contactOperation";

const loading = (state: ContactsState) => {
  state.isLoading = STATUS.loading;
};
const error = (state: ContactsState) => {
  state.error = STATUS.error;
};

export const initContactsState: ContactsState = {
  items: [],
  isLoading: STATUS.idle,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initContactsState,
  reducers: {
    logoutUserState: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, loading)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
        state.isLoading = STATUS.success;
      })
      .addCase(getContacts.rejected, error)
      .addCase(addContacts.pending, loading)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = STATUS.success;
      })
      .addCase(addContacts.rejected, error)
      .addCase(deleteContact.pending, loading)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
        state.isLoading = STATUS.success;
      })
      .addCase(deleteContact.rejected, error);
  },
});

export const contactsReducer = contactSlice.reducer;
export const { logoutUserState } = contactSlice.actions;

// interface contactsAction {
//   type: string;
//   payload: NewContact | string;
// }

// export const contactsReducer = (
//   state: ContactsState = initContactsState,
//   { type, payload }: AnyAction
// ): ContactsState => {
//   switch (type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         items: [...state.items, payload as NewContact],
//       };
//     case "LOAD":
//       return {
//         ...state,
//         isLoading: payload as string,
//       };
//     default:
//       return state;
//   }
// };
