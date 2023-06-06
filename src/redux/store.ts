import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { initAuthState } from "./auth/authSlice";
import { initStateIterface } from "../types/storeStateInterface";
import persistedAuthReducer from "./localStorage.store";
import { filterReducer, initFilterState } from "./filter/filterSlice";
import { contactsReducer, initContactsState } from "./contacts/contactsReducer";

export const initState: initStateIterface = {
  auth: initAuthState,
  contact: initContactsState,
  filter: initFilterState.filter,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: persistedAuthReducer,
    contact: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
