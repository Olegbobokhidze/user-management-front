import axios from "axios";
import React, { useState } from "react";
import { addUser, updateUser } from "../../redux/actions/Actions";
import { useAppDispatch } from "../../redux/hooks";
import Cross from "../../images/icon-cross.svg";
import {
  StyledName,
  StyledEmail,
  StyledAge,
  InputTitleHolder,
  InputTitle,
  Modal,
  Button,
  Img,
  ModalHolder,
  MaleCheckbox,
  FemaleCheckbox,
  CheckboxesHolder,
  Paragraph,
} from "../userform/StyledInputs";
import { userSchema } from "../userSchema/userSchema";
type EditProps = {
  show: boolean;
  setShow: (val: boolean) => void;
  name1: string;
  age1: number;
  mail1: string;
  id1: string;
  gender1: string;
};
type UserType = {
  mail: string;
  age: number;
  name: string;
  id: string;
  gender: string;
};
export const EditUser = ({
  show,
  setShow,
  name1,
  age1,
  mail1,
  id1,
  gender1,
}: EditProps) => {
  const [name, setName] = useState<string>(name1);
  const [mail, setMail] = useState<string>(mail1);
  const [gender, setGender] = useState<string>(gender1);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [checkbox1, setCheckbox1] = useState<boolean>(false);

  const [age, setAge] = useState<number>(age1);
  const dispatch = useAppDispatch();
  const editUser = async (user: UserType) => {
    try {
      const validatedUser = userSchema.parse(user);
      const res = await axios.put(
        `http://localhost:3001/${user.id}`,
        validatedUser
      );
      const updatedUser = res.data;
      dispatch(updateUser(updatedUser));
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };
  const checkboxChangeMale = () => {
    setCheckbox(true);
    setCheckbox1(false);
    setGender("Male");
  };
  const checkboxChangeFemale = () => {
    setCheckbox1(true);
    setCheckbox(false);
    setGender("Female");
  };
  return (
    <>
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
                  checked={checkbox}
                  onChange={checkboxChangeMale}
                />
                <Paragraph>Female</Paragraph>
                <FemaleCheckbox
                  type="checkbox"
                  name="checkboxFemale"
                  value="checkboxFemale"
                  checked={checkbox1}
                  onChange={checkboxChangeFemale}
                />
              </CheckboxesHolder>
            </InputTitleHolder>
            <Button
              onClick={() =>
                editUser({
                  name: name,
                  mail: mail,
                  age: age,
                  gender: gender,
                  id: id1,
                })
              }
            >
              Edit user
            </Button>
          </Modal>
        </ModalHolder>
      ) : null}
    </>
  );
};
