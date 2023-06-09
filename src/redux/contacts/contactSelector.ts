import { NewContact } from "../../types/contacts";
import { useAppSelector } from "../../types/hooks";
import { initStateIterface } from "../../types/storeStateInterface";

export const contactSelector = (state: initStateIterface): NewContact[] =>
  state.contact.items;

export const isLoadingSelector = (state: initStateIterface): string =>
  state.contact.isLoading;

export const errorSelector = (state: initStateIterface): string | null =>
  state.contact.error;

export const useContactSelector = () => {
  return {
    items: useAppSelector(contactSelector),
    isLoading: useAppSelector(isLoadingSelector),
    error: useAppSelector(errorSelector),
  };
};
