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

// Или так
// type FormValues = {
//   name?: string;
//   email: string;
//   password: string;
// };

// const registerForm: FormValues = {
//   name: "",
//   email: "",
//   password: "",
// };

// const loginForm: FormValues = {
//   email: "",
//   password: "",
// };

// // Используем Omit, чтобы создать новый тип без поля "name"
// type LoginFormValues = Omit<FormValues, "name">;

// // Используем Pick, чтобы создать новый тип с полями "email" и "password"
// type RegisterFormValues = Pick<FormValues, "email" | "password">;
