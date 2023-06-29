import React from "react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { useSelector } from "react-redux";
import { reduxStoreType } from "../redux/sliceTypes";
import store, { changeDarkMode } from "../redux/store";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const isDarkMode = useSelector((state: reduxStoreType) => {
    return state.darkMode;
  });

  return (
    <Container>
      다크모드{" "}
      <Switch
        value={isDarkMode}
        onChange={() => {
          store.dispatch(changeDarkMode());
        }}
      />
    </Container>
  );
};
