import React from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { useQuery } from "react-query";
import { taskType } from "../type/tasksType";
import { getServerTasks } from "../api/api";

export const colors = {
  dark: {
    background: "#20252a",
    card: "#404348",
    text: "#dce1e8",
  },
  light: {
    background: "#e9ecf3",
    card: "#ffffff",
    text: "#20252a",
  },
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.background};
        color: ${(props: any) => props.theme.text};
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: Sen;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    #root {
        width: 100vw;
    }

    * {
        transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
    }
`;

type ThemeProviderProps = { darkMode: boolean; children: any };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  darkMode,
  children,
}) => {
  const { data } = useQuery<{ isDarkMode: boolean }>(
    "isDarkMode",
    () => {
      return getServerTasks();
    },
    {
      refetchOnWindowFocus: false,
      retry: 0, // 실패시 재호출 몇번 할지
    }
  );

  return (
    <StyledThemeProvider theme={data?.isDarkMode ? colors.dark : colors.light}>
      {children}
    </StyledThemeProvider>
  );
};

export const Page = styled.div`
  width: 100%;
  max-width: 560px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;
