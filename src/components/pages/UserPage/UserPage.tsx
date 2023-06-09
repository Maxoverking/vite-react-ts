import { FC, useState } from "react";
import { BUTTON, LOGOUT, ICON_OUT, DIV, H2 } from "./UserPage.styled";
import { useAuthSelector } from "../../../redux/auth/authSelector";
import { useAppDispatch } from "../../../types/hooks";
import { logOut } from "../../../redux/auth/authOperation";
import { logoutUserState } from "../../../redux/contacts/contactsReducer";
import { useDispatch } from "react-redux";

const UserPage: FC = () => {
  const dis = useDispatch();
  const dispatch = useAppDispatch();
  const { user } = useAuthSelector();
  const [isHover, setIsHover] = useState(false);

  const logOutUser = () => {
    dis(logoutUserState());
    dispatch(logOut());
  };

  return (
    <>
      <H2>{user.name}</H2>
      <DIV>
        <BUTTON
          onClick={logOutUser}
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
