import React from "react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { useAtom } from "jotai";
import { readWriteIsDarkModeAtom } from "../state";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(readWriteIsDarkModeAtom);
  return (
    <Container>
      다크모드 <Switch value={isDarkMode} onChange={() => setIsDarkMode()} />
    </Container>
  );
};
