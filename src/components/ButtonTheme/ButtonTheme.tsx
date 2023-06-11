import { useState } from "react";
import {
  CheckboxInput,
  Slider,
  SliderBefore,
  Switch,
} from "./ButtonTheme.styled";
const htmlElement: HTMLCollectionOf<HTMLHtmlElement> =
  document.getElementsByTagName("html");
const html: HTMLHtmlElement | undefined = htmlElement[0];

const ButtonTheme = () => {
  const [theme, setTheme] = useState(false);
  const [appTheme, setAppTheme] = useState("light");
  localStorage.setItem("theme", appTheme);

  const changeTheme = () => {
    if (html) {
      if (!theme) {
        setTheme(true);
        setAppTheme("dark");
        html.setAttribute("data-theme", "dark");
      } else {
        setTheme(false);

        html.setAttribute("data-theme", "light");
      }
    }
  };

  return (
    <Switch onClick={changeTheme}>
      <CheckboxInput type="checkbox" checked={!theme} onChange={changeTheme} />
      <Slider>
        <SliderBefore />
      </Slider>
    </Switch>
  );
};

export default ButtonTheme;
