import * as Yup from "yup";

const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, "Name is required")
    .trim(),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .trim(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .trim(),
});

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .trim(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .trim(),
});

const validationContsctSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .trim()
    .max(30, "Name must be at most 30 symbol")
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, "Name only letters"),
});

export {
  validationSchemaRegister,
  validationSchemaLogin,
  validationContsctSchema,
};
