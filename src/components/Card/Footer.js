import React from "react";
import styled from "styled-components";
import { DateWrapper, DateEntry, Section } from "./styled";

export const Wrapper = styled(Section)`
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  text-align: end;
  color: ${(props) => (props.active ? "green" : "red")};
`;

export default ({ lastUpdated, status }) => (
  <Wrapper>
    <DateWrapper>
      <DateEntry style={{ justifyContent: "flex-start" }}>
        Last updated: {lastUpdated}
      </DateEntry>
    </DateWrapper>
    <Status active={status === "Active"}>{status}</Status>
  </Wrapper>
);
