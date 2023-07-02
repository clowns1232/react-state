import React from "react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { useDarkMode } from "../zustand";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const { changeDarkMode, isDarkMode } = useDarkMode((state) => state);

  return (
    <Container>
      다크모드 <Switch value={isDarkMode} onChange={changeDarkMode} />
    </Container>
  );
};
