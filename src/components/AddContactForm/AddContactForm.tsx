import { ChangeEvent, FC, useState } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import {
  BUTTON,
  DIV,
  DIV_PHONE,
  H3,
  INPUT_NAME,
} from "./AddContactForm.styled";
import { validationContsctSchema } from "../../helper/validationYup/validationYup";
import { modalProps } from "../../types/modal";
import ReactPhoneInput from "react-phone-input-2";
import { addContacts } from "../../redux/contacts/contactOperation";
import { useAppDispatch } from "../../types/hooks";
import { useContactSelector } from "../../redux/contacts/contactSelector";
import { toast } from "react-toastify";

const ContactForm: FC<modalProps> = ({ modalShow }) => {
  const dispatch = useAppDispatch();
  const { items } = useContactSelector();
  const [name, setName] = useState("");
  const [number, setPhone] = useState("");
  const [nameError, setNameError] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (number: string) => {
    setPhone(number);
  };

  const handleSubmit = async () => {
    const existContact = items.find((item) => item.name === name);
    if (existContact?.name === name) {
      toast.warning(`Name ${name} aready in your PHONEBOOK`, {
        autoClose: 3000,
        pauseOnHover: true,
      });
      return;
    }
    try {
      await validationContsctSchema.validate({ name });
      // const newContacts: NewContact = { name, number, id: nanoid() };

      dispatch(addContacts({ name, number, id: nanoid() }));

      resetForm();
    } catch (error: unknown) {
      if (error instanceof Yup.ValidationError) {
        setNameError(error.message);
      }
    }
  };
  const resetForm = () => {
    setName("");
    setPhone("");
    modalShow();
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
            name: "number",
            required: true,
          }}
        />
      </DIV_PHONE>
      <div>
        <BUTTON onClick={handleSubmit}>ADD CONTACT</BUTTON>
      </div>
    </DIV>
  );
};
export default ContactForm;
