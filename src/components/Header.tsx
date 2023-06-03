import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "./Switch";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Container>
      다크모드 <Switch value={darkMode} onChange={setDarkMode} />
    </Container>
  );
};
