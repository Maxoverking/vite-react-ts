import { NewContact } from "../../types/contacts";
import { initStateIterface } from "../../types/storeStateInterface";

export const itemSelector = (state: initStateIterface): NewContact[] =>
  state.contact.item;

export const errorSelector = (state: initStateIterface): string | null =>
  state.contact.error;

export const isLoadingSelector = (state: initStateIterface): string =>
  state.contact.isLoading;
