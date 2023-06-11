import { axiosRequest } from "../servises/servises";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormValues, RegisterFormValues } from "../../types/user";
import { AuthState } from "../../types/storeStateInterface";
import { getTokenWithoutQuotes } from "../../helper/getLocalStoreToken";
import { setToken } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (newUser: RegisterFormValues): Promise<AuthState> => {
    try {
      const response = await axiosRequest.post("/users/signup", newUser);
      toast.success(`WELCOME  ${response.data.user.name}`);

      return response.data;
    } catch (error) {
      toast.error("Check email password is correct?");
      throw error;
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/login",
  async (existUserData: LoginFormValues): Promise<AuthState> => {
    try {
      const { data } = await axiosRequest.post("/users/login", existUserData);

      return data;
    } catch (error) {
      toast.error("This user does not exist please Register!");
      throw error;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const tokenWithoutQuotes = await getTokenWithoutQuotes();

    if (tokenWithoutQuotes) {
      axiosRequest.defaults.headers.common.Authorization = `Bearer ${tokenWithoutQuotes}`;
      await axiosRequest.post("/users/logout");
      axiosRequest.defaults.headers.common.Authorization = "";
    }
  } catch (error) {
    return;
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const tokenWithoutQuotes = await getTokenWithoutQuotes();

    if (tokenWithoutQuotes === "null") {
      thunkAPI.dispatch(setToken({ token: null, isHaveToken: false }));
      return { name: null, email: null };
    } else {
      try {
        thunkAPI.dispatch(
          setToken({ token: tokenWithoutQuotes, isHaveToken: true })
        );
        axiosRequest.defaults.headers.common.Authorization = `Bearer ${tokenWithoutQuotes}`;
        const { data } = await axiosRequest.get("/users/current");
        toast.success(`WELCOME  ${data.name}`);
        return data;
      } catch (error) {
        toast.error("Server Problem !!!");
        return error;
      }
    }
  }
);
