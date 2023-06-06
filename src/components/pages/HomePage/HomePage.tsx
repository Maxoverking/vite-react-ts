import { FC } from "react";
import { DIV } from "./HomePage.styled";
import { Outlet } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <>
      <DIV>
        <Outlet />
      </DIV>
    </>
  );
};
export default HomePage;
