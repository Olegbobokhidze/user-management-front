import React, { useState } from "react";
import styled from "styled-components";
import Delete from "../../images/icon-cross.svg";
import Edit from "../../images/edit.png";
import { useAppDispatch } from "../../redux/hooks";
import { removeUser } from "../../redux/actions/Actions";
import axios from "axios";
import { EditUser } from "../editUser/EditUser";

type userProp = {
  name: string;
  age: number;
  mail: string;
  id: any;
  gender: string;
};
export const User = ({ name, age, mail, id, gender }: userProp) => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const deleteUser = (id: any) => {
    axios
      .delete(
        `http://localhost:3001/users/${id}
  `
      )
      .then((res) => {
        dispatch(removeUser(id));
      });
  };
  return (
    <>
      <EditUser
        show={show}
        setShow={setShow}
        name1={name}
        age1={age}
        mail1={mail}
        gender1={gender}
        id1={id}
      />
      <Holder key={id}>
        <Name>{name}</Name>
        <Mail>{mail}</Mail>
        <Gender>{gender}</Gender>
        <Age>{age}</Age>
        <IconsHolder>
          <EditIcon src={Edit} alt="edit icon" onClick={() => setShow(true)} />
          <DeleteIcon
            src={Delete}
            alt="delete icon"
            onClick={() => deleteUser(id)}
          />
        </IconsHolder>
      </Holder>
    </>
  );
};
const Holder = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: #e5e5e5;
  height: 50px;
  justify-items: space-around;
  padding-left: 30px;
  align-items: center;
  width: 600px;
  border-bottom: solid 1px #8d99ae;
`;
const Name = styled.h4`
  color: black;
  font-weight: bold;
`;
const Mail = styled.h4`
  color: black;
  font-weight: bold;
`;
const Gender = styled.h4`
  color: black;
  font-weight: bold;
`;
const Age = styled.h4`
  color: black;
  font-weight: bold;
`;
const DeleteIcon = styled.img`
  cursor: pointer;
`;
const EditIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const IconsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
