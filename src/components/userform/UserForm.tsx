import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cross from "../../images/icon-cross.svg";
import axios from "axios";
import { addUser } from "../../redux/actions/Actions";
import {
  StyledName,
  StyledEmail,
  StyledAge,
  InputTitleHolder,
  InputTitle,
  Modal,
  ShowModal,
  Button,
  Img,
  ModalHolder,
  MaleCheckbox,
  FemaleCheckbox,
  CheckboxesHolder,
  Paragraph,
} from "./StyledInputs";
import { userSchema } from "../userSchema/userSchema";
export const UserForm = () => {
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [checkbox, setCheckbox] = useState({
    male: false,
    female: false,
  });
  const [age, setAge] = useState<number>(0);
  const dispatch = useDispatch();
  const createUser = async (user: any) => {
    try {
      const validatedUser = userSchema.parse(user);
      const res = await axios.post(
        "http://localhost:3001/createUser",
        validatedUser
      );
      const createdUser = res.data;
      dispatch(addUser(createdUser));
      setName("");
      setAge(0);
      setMail("");
      setGender("");
      setCheckbox({ male: false, female: false });
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };
  const checkboxChangeMale = () => {
    setCheckbox({ male: true, female: false });
    setGender("Male");
  };
  const checkboxChangeFemale = () => {
    setCheckbox({ male: false, female: true });
    setGender("Female");
  };
  return (
    <>
      <ShowModal onClick={() => setShow(true)}>New User</ShowModal>
      {show ? (
        <ModalHolder>
          <Modal>
            <Img
              src={Cross}
              alt="closing modal"
              onClick={() => setShow(false)}
            />
            <InputTitleHolder style={{ marginTop: "60px" }}>
              <InputTitle style={{ marginRight: "30px" }}>Name</InputTitle>
              <StyledName
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputTitleHolder>
            <InputTitleHolder>
              <InputTitle style={{ marginRight: "30px" }}>Email</InputTitle>
              <StyledEmail
                placeholder="@Email..."
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </InputTitleHolder>

            <InputTitleHolder>
              <InputTitle style={{ marginRight: "40px" }}>Age</InputTitle>
              <StyledAge
                placeholder="Age..."
                value={age}
                type="number"
                onChange={(e) => setAge(e.target.valueAsNumber)}
              />
            </InputTitleHolder>
            <InputTitleHolder>
              <InputTitle style={{ marginRight: "19px" }}>Gender</InputTitle>
              <CheckboxesHolder>
                <Paragraph>Male</Paragraph>
                <MaleCheckbox
                  type="checkbox"
                  name="checkboxMale"
                  value="checkboxMale"
                  checked={checkbox.male}
                  onChange={checkboxChangeMale}
                />
                <Paragraph>Female</Paragraph>
                <FemaleCheckbox
                  type="checkbox"
                  name="checkboxFemale"
                  value="checkboxFemale"
                  checked={checkbox.female}
                  onChange={checkboxChangeFemale}
                />
              </CheckboxesHolder>
            </InputTitleHolder>
            <Button
              onClick={() =>
                createUser({
                  name: name,
                  mail: mail,
                  age: age,
                  gender: gender,
                })
              }
            >
              Add user
            </Button>
          </Modal>
        </ModalHolder>
      ) : null}
    </>
  );
};
