import { FcPrivacy, FcUnlock } from "react-icons/fc";
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
import { H2_LOGIN, UNLOCK_BTN } from "./LoginForm.styled";
import { LoginFormValues, loginForm } from "../../types/user";
import { useAppDispatch } from "../../types/hooks";
import { logInUser } from "../../redux/auth/authOperation";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loginFormData, setLoginData] = useState<LoginFormValues>(loginForm);
  const [errors, setErrors] = useState<Partial<LoginFormValues>>({});
  const [showPassword, setShowPassword] = useState(true);

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
        <H2_LOGIN>Log in</H2_LOGIN>
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
            type={showPassword ? "password" : "text"}
            name="password"
            margin="dense"
            autoComplete="password"
            value={loginFormData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <UNLOCK_BTN
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FcPrivacy size={20} /> : <FcUnlock size={20} />}
          </UNLOCK_BTN>
          <DIV_BTN>
            <BUTTON type="submit">Submit</BUTTON>
          </DIV_BTN>
        </FORM>
      </DIV>
    </>
  );
};

export default LoginPage;
