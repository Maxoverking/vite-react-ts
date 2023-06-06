import storage from "redux-persist/lib/storage";

export const getTokenWithoutQuotes = async () => {
  const storedToken: string | null = await storage.getItem("persist:phoneBook");
  const { token } = JSON.parse(storedToken as string);
  return token?.replace(/"/g, "") || null;
};
