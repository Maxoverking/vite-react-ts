import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
