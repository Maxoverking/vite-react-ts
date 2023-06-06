import { useAppSelector } from "../../types/hooks";
import { UserField } from "../../types/user";
import { RootState } from "../store";

const authUserSelector = (state: RootState): UserField => state.auth.user;

const authTokenSelector = (state: RootState): string | null => state.auth.token;

const authLoginSelector = (state: RootState): boolean => state.auth.isLogin;

const authLoginAlreadySelector = (state: RootState): boolean =>
  state.auth.isLoginAlready;

export const useAuthSelector = () => {
  return {
    user: useAppSelector(authUserSelector),
    token: useAppSelector(authTokenSelector),
    isLogin: useAppSelector(authLoginSelector),
    isLoginAlready: useAppSelector(authLoginAlreadySelector),
  };
};
