import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { getServerDarkMode, putServerDarkMode } from "../api/api";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const queryClient = useQueryClient();
  const { data } = useQuery<{ isDarkMode: boolean }>(
    "isDarkMode",
    async () => {
      return await getServerDarkMode();
    },
    {
      refetchOnWindowFocus: false,
      retry: 0, // 실패시 재호출 몇번 할지
    }
  );

  const { mutateAsync } = useMutation(
    () => putServerDarkMode(data ? data.isDarkMode : false),
    {
      onSuccess: () => queryClient.invalidateQueries(["isDarkMode"]),
    }
  );

  return (
    <Container>
      다크모드{" "}
      <Switch
        value={data ? data.isDarkMode : false}
        onChange={() => {
          mutateAsync();
        }}
      />
    </Container>
  );
};
