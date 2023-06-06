interface Status {
  // idle: string;
  // loading: string;
  // success: string;
  // error: string;
  [key: string]: string;
}

export const STATUS: Status = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};
