import { useState } from "react";
import * as Yup from "yup";
import { validationSchemaLogin } from "../../helper/validationYup/validationYup";
import {
  DIV,
  FORM,
  DIV_BTN,
  BUTTON,
} from "../RegisterForm/RegisterForm.styled";
import { TextField } from "@mui/material";
import { H2_Login } from "./LoginForm.styled";
import { LoginFormValues, loginForm } from "../../types/user";
import { useAppDispatch } from "../../types/hooks";
import { logInUser } from "../../redux/auth/authOperation";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loginFormData, setLoginData] = useState<LoginFormValues>(loginForm);
  const [errors, setErrors] = useState<Partial<LoginFormValues>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setLoginData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await validationSchemaLogin.validate(loginFormData, {
        abortEarly: false,
      });

      dispatch(logInUser(loginFormData));
      setLoginData({
        email: "",
        password: "",
      });
      setErrors({});
    } catch (validationErrors) {
      console.log("objectERROR");
      if (validationErrors instanceof Yup.ValidationError) {
        // Преобразование ошибок в удобный формат для отображения
        const formattedErrors: Partial<LoginFormValues> = {};

        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path as keyof LoginFormValues] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };
  return (
    <>
      <DIV>
        <H2_Login>Log in</H2_Login>
        <FORM onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="standard"
            id="email"
            name="email"
            margin="dense"
            autoComplete="email"
            value={loginFormData.email}
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
            value={loginFormData.password}
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

export default LoginPage;
