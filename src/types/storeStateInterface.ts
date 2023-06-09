import { NewContact } from "./contacts";
import { UserField } from "./user";

export interface ContactsState {
  items: NewContact[];
  isLoading: string;
  error: null | string;
}
export interface AuthState {
  user: UserField;
  token: string | null;
  isLogin: boolean;
  isLoginAlready: boolean;
  _persist: {
    version: number;
    rehydrated: boolean;
  };
}
export interface FilterState {
  filter: string;
}

export interface initStateIterface {
  auth: AuthState;
  contact: ContactsState;
  filter: string;
}
