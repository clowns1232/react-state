import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { taskType } from "../type/tasksType";
import { useQuery } from "react-query";
import { getServerTasks } from "../api/api";

const StatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
`;

const Stat: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <StatContainer>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatContainer>
  );
};

const Divider = styled.div`
  width: 1px;
  height: 42px;
  background-color: ${(props) => props.theme.text};
  opacity: 0.3;
`;

const Container = styled(Card)`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

export const Stats: React.FC = () => {
  const { data } = useQuery<taskType[]>(
    "tasks",
    () => {
      return getServerTasks();
    },
    {
      refetchOnWindowFocus: false,
      retry: 0, // 실패시 재호출 몇번 할지
    }
  );

  return (
    <Container>
      <Stat
        label="끝난 일감"
        value={data ? data.filter((task) => task.complete).length : 0}
      />
      <Divider />
      <Stat
        label="남은 일감"
        value={data ? data?.filter((task) => !task.complete).length : 0}
      />
    </Container>
  );
};
