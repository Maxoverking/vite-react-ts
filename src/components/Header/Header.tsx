import { FC, Suspense } from "react";
import {
  DIV,
  H3,
  BUTTON,
  LI,
  AVATAR,
  H2,
  DIV_HOME,
  DIV_THEME,
} from "./Header.styled";
import { Outlet } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import { useAuthSelector } from "../../redux/auth/authSelector";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

const Header: FC = () => {
  const { user } = useAuthSelector();
  const { isLogin } = useAuthSelector();

  return (
    <>
      <DIV>
        {isLogin ? (
          <DIV_HOME>
            <DIV_THEME>
              <ButtonTheme />
            </DIV_THEME>
            <AVATAR>
              <H2>{user.name?.slice(0, 1).toUpperCase()}</H2>
            </AVATAR>
          </DIV_HOME>
        ) : (
          <DIV_HOME>
            <DIV_THEME>
              <ButtonTheme />
            </DIV_THEME>
            <H3 to="/">HOME</H3>
          </DIV_HOME>
        )}
        <ul>
          {isLogin ? (
            <LI>
              <UserPage />
            </LI>
          ) : (
            <LI>
              <BUTTON to="register">Register</BUTTON>
              <BUTTON to="login">Log in</BUTTON>
            </LI>
          )}
        </ul>
      </DIV>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;

// interface HeaderProps {
//   loading: boolean;
//   loadUser: () => void;
// }
// {
//   loading, loadUser;
// }
