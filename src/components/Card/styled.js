import styled, { keyframes, css } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.expanded ? "450px" : "300px")};
  max-width: 500px;
  max-height: 450px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  border: double;
  background: black;
  opacity: 0.75;

  visibility: ${(props) => (props.dismissed ? "hidden" : "visible")};
  animation: ${(props) => props.dismissed && fadeOut} 0.5s linear;
  transition: 0.5s visibility ease-out, 1s height linear;

  ${({ favorite }) =>
    favorite &&
    css`
      border: 1px solid yellow;
    `}
`;

export const Section = styled.div`
  display: flex;
  padding: 10px 0px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  font-size: 0.7rem;
  justify-content: flex-start;
`;

export const DateEntry = styled.div`
  display: flex;
`;

export const ExpandWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: auto;
  background: lightblue;
  color: black;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }

  ${({ expanded }) =>
    expanded &&
    css`
      border-bottom: 1px solid white;
    `}
`;

export const TextContainer = styled(Section)`
  height: 60px;
  overflow: scroll;
  font-size: 0.8rem;
`;

export const Close = styled.div`
  display: relative;
  top: 0;
  right: 0;

  :hover {
    cursor: pointer;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
