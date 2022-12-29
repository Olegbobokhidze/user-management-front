import styled from "styled-components";

export const StyledName = styled.input`
  width: 160px;
  height: 22px;
  background-color: #bc8a5f;
  border: none;
  color: white;
  padding: 5px;
  font-weight: bold;
  ::placeholder {
    color: whitesmoke;
  }
  &:focus {
    outline: none;
  }
`;
export const StyledEmail = styled.input`
  width: 160px;
  height: 22px;
  background-color: #bc8a5f;
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px;
  ::placeholder {
    color: whitesmoke;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledAge = styled.input`
  width: 160px;
  height: 22px;
  background-color: #bc8a5f;
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px;
  ::placeholder {
    color: whitesmoke;
  }
  &:focus {
    outline: none;
  }
`;
export const InputTitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
`;
export const InputTitle = styled.h5`
  color: black;
  font-weight: bold;
`;
export const ShowModal = styled.button`
  background-color: #8b5e34;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #d4a276;
    color: black;
  }
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  position: relative;
  height: 300px;
  border-radius: 10px;
  background-color: #ffedd8;
`;
export const Button = styled.button`
  background-color: #8b5e34;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: #d4a276;
    color: black;
  }
`;
export const Img = styled.img`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;
export const ModalHolder = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;

  justify-content: center;
  z-index: 999;
`;
export const MaleCheckbox = styled.input``;
export const FemaleCheckbox = styled.input``;
export const Paragraph = styled.p`
  font-size: small;
  color: black;
`;
export const CheckboxesHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 5px;
`;
