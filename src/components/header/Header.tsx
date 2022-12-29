import React from "react";
import styled from "styled-components";
const Holder = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: #101935;
  height: 50px;
  justify-items: center;
  align-items: center;
  width: 600px;
`;
const SectionTitle = styled.h4`
  color: white;
`;

export const Header = () => {
  return (
    <Holder>
      <SectionTitle>Name</SectionTitle>
      <SectionTitle>@Email</SectionTitle>
      <SectionTitle>Gender</SectionTitle>
      <SectionTitle>Age</SectionTitle>
      <SectionTitle>Action</SectionTitle>
    </Holder>
  );
};
