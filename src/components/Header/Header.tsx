import { FC, Suspense } from "react";
import { DIV, H3, BUTTON, LI } from "./Header.styled";
import { Outlet } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import { Avatar } from "@mui/material";
import { useAuthSelector } from "../../redux/auth/authSelector";
import deepPurple from "@mui/material/colors/deepPurple";

const Header: FC = () => {
  const { isLogin } = useAuthSelector();
  // const { user } = useAuthSelector();

  return (
    <>
      <DIV>
        {isLogin ? (
          <Avatar sx={{ bgcolor: deepPurple[800] }} />
        ) : (
          <H3 to="/">HOME</H3>
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
