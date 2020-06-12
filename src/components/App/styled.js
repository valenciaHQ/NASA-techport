import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const PaginationControl = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const CurrentPage = styled.span`
  margin: 0 10px;
`;

export const ErrorText = styled.h2`
  :hover {
    cursor: pointer;
  }
`;
