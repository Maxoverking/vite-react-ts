import { ChangeEvent, FC, useState } from "react";
import * as Yup from "yup";
import {
  BUTTON,
  DIV,
  DIV_BTN,
  DIV_PHONE,
  H3,
  INPUT_NAME,
} from "./AddContactForm.styled";
import ReactPhoneInput from "react-phone-input-2";
import { validationContsctSchema } from "../../helper/validationYup/validationYup";
import { modalProps } from "../../types/modal";
import { NewContact } from "../../types/contacts";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const ContactForm: FC<modalProps> = ({ modalShow }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  const handleSubmit = async () => {
    try {
      await validationContsctSchema.validate({ name });
      const newContacts: NewContact = { name, phone, id: nanoid() };
      dispatch({ type: "ADD_CONTACT", payload: newContacts });
      console.log("🚀  newContacts:", newContacts);

      resetForm();
      modalShow();
    } catch (error: unknown) {
      if (error instanceof Yup.ValidationError) {
        setNameError(error.message);
      }
    }
  };
  const resetForm = () => {
    setName("");
    setPhone("");
  };

  return (
    <DIV>
      <H3>ADD CONTACTS</H3>
      <INPUT_NAME
        label="NAME"
        size="small"
        variant="standard"
        value={name}
        onChange={handleNameChange}
        error={Boolean(nameError)}
        helperText={nameError}
      />

      <DIV_PHONE>
        <ReactPhoneInput
          onChange={handlePhoneChange}
          inputProps={{
            name: "phone",
            required: true,
          }}
        />
      </DIV_PHONE>
      <DIV_BTN>
        <BUTTON onClick={handleSubmit}>ADD CONTACT</BUTTON>
      </DIV_BTN>
    </DIV>
  );
};
export default ContactForm;
