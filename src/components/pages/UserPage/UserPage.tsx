import { FC, useState } from "react";
import { BUTTON, LOGOUT, ICON_OUT, DIV } from "./UserPage.styled";
import { useAuthSelector } from "../../../redux/auth/authSelector";
import { useAppDispatch } from "../../../types/hooks";
import { logOut } from "../../../redux/auth/authOperation";

const UserPage: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuthSelector();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <h2>{user.name}</h2>
      <DIV>
        <BUTTON
          onClick={() => dispatch(logOut())}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ICON_OUT />
          <LOGOUT type="button" isHover={isHover}>
            Logout
          </LOGOUT>
        </BUTTON>
      </DIV>
    </>
  );
};
export default UserPage;

// interface UserProps {
//   loadUser: () => void;
// }
