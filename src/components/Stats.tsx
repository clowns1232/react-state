import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { reduxStoreType } from "../redux/sliceTypes";

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
  const tasks = useSelector((state: reduxStoreType) => {
    return state.tasks;
  });

  return (
    <Container>
      <Stat
        label="끝난 일감"
        value={tasks.filter((task) => task.complete === true).length}
      />
      <Divider />
      <Stat
        label="남은 일감"
        value={tasks.filter((task) => task.complete === false).length}
      />
    </Container>
  );
};
