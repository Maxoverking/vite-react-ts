import { ChangeEvent, FC, FormEvent, useState } from "react";
import * as Yup from "yup";
import { BUTTON, DIV, DIV_BTN, FORM, H2 } from "./RegisterForm.styled";
import { TextField } from "@mui/material";
import { validationSchemaRegister } from "../../helper/validationYup/validationYup";
import { useAppDispatch } from "../../types/hooks";
import { RegisterFormValues, registerForm } from "../../types/user";
import { registerUser } from "../../redux/auth/authOperation";

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<RegisterFormValues>(registerForm);
  const [errors, setErrors] = useState<Partial<RegisterFormValues>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await validationSchemaRegister.validate(formData, { abortEarly: false });

      dispatch(registerUser(formData));

      setErrors({});
      setFormData(registerForm);
    } catch (validationErrors) {
      console.log("RegisterForm ERROR");
      if (validationErrors instanceof Yup.ValidationError) {
        // Преобразование ошибок в удобный формат для отображения
        const formattedErrors: Partial<RegisterFormValues> = {};

        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path as keyof RegisterFormValues] =
            error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };
  return (
    <>
      <DIV>
        <H2>Registration</H2>
        <FORM onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="standard"
            id="name"
            name="name"
            margin="dense"
            autoComplete="username"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            variant="standard"
            id="email"
            name="email"
            margin="dense"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            variant="standard"
            id="password"
            name="password"
            margin="dense"
            autoComplete="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <DIV_BTN>
            <BUTTON type="submit">Submit</BUTTON>
          </DIV_BTN>
        </FORM>
      </DIV>
    </>
  );
};

export default RegisterForm;
