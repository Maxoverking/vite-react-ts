import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../servises/servises";
import { NewContact } from "../../types/contacts";
import { toast } from "react-toastify";
import { getTokenWithoutQuotes } from "../../helper/getLocalStoreToken";
import { refreshUser } from "../auth/authOperation";

export const getContacts = createAsyncThunk("fetchAll", async (_, thunkAPI) => {
  try {
    const tokenWithoutQuotes = await getTokenWithoutQuotes();

    axiosRequest.defaults.headers.common.Authorization = `Bearer ${tokenWithoutQuotes}`;
    const { data } = await axiosRequest.get("/contacts");

    return data;
  } catch (error) {
    toast.error("Server problem Refresh Page!!!");
    thunkAPI.dispatch(refreshUser());
    return [];
  }
});

export const addContacts = createAsyncThunk(
  "addContact",
  async (addNewContact: NewContact, thunkAPI) => {
    try {
      const { data } = await axiosRequest.post("/contacts", addNewContact);
      toast.success("Contact Added");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (uniqueId: string, thunkAPI) => {
    try {
      const { data } = await axiosRequest.delete(`/contacts/${uniqueId}`);
      toast.success("Contact deleted");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
