import storage from "redux-persist/lib/storage"; // Импортируем нужный тип хранилища
import { authReducer } from "./auth/authSlice";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "phoneBook", // Ключ, по которому данные будут сохраняться в хранилище
  storage, // Используемое хранилище (например, localStorage)
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export default persistedAuthReducer;
