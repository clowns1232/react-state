import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { getServerDarkMode, putServerDarkMode } from "../api/api";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const { data: isDarkMode } = useSWR<boolean>(
    "/isDarkMode",
    getServerDarkMode
  );
  const { trigger } = useSWRMutation("/isDarkMode", () => {
    putServerDarkMode(isDarkMode);
  });
  return (
    <Container>
      다크모드{" "}
      <Switch
        value={isDarkMode ? isDarkMode : false}
        onChange={() => trigger()}
      />
    </Container>
  );
};
