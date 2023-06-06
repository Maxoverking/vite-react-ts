export interface setTokenObject {
  token: string | null;
  isHaveToken: boolean;
}
export interface UserField {
  name: null | string | undefined;
  email: null | string | undefined;
}

export interface FormValues {
  [key: string]: string;
}

export const registerForm: FormValues = {
  name: "",
  email: "",
  password: "",
};

export const loginForm: FormValues = {
  email: "",
  password: "",
};

export type RegisterFormValues = typeof registerForm;
export type LoginFormValues = typeof loginForm;
