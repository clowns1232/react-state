import React, { useState } from "react";
import styled from "styled-components";
import { Container as TaskContainer, TextStyle as TaskTextStyle } from "./Task";
import useSWRMutation from "swr/mutation";
import { postServerTasks } from "../api/api";

const InsertInput = styled.input`
  width: 100%;
  height: 100%;
  appearance: none;
  border: 0;
  background-color: transparent;
  outline: none;
  -webkit-appearance: textfield;
  ${TaskTextStyle};

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const Input: React.FC = () => {
  const [label, setLabel] = useState("");
  const { trigger } = useSWRMutation("/tasks", () => {
    postServerTasks(label);
  });

  return (
    <TaskContainer>
      <InsertInput
        placeholder="새로운 일 추가"
        type="search"
        autoComplete="off"
        value={label}
        onChange={({ currentTarget }) => {
          setLabel(currentTarget.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            trigger();
            setLabel("");
          }
        }}
      />
    </TaskContainer>
  );
};
