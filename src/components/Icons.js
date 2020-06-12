import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbtack,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowRight,
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  ${({ onClick }) =>
    onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

const StarIcon = styled(Wrapper)`
  color: ${(props) => props.favorite && "yellow"};

  :hover {
    color: yellow;
  }
`;

export const Location = ({ onClick, style }) => (
  <Wrapper onClick={onClick} style={{ ...style }}>
    <FontAwesomeIcon icon={faThumbtack} />
  </Wrapper>
);

export const ArrowUp = ({ onClick, style }) => (
  <Wrapper onClick={onClick} style={{ ...style }}>
    <FontAwesomeIcon icon={faArrowAltCircleUp} />
  </Wrapper>
);

export const ArrowDown = ({ onClick, style }) => (
  <Wrapper onClick={onClick} style={{ ...style }}>
    <FontAwesomeIcon icon={faArrowAltCircleDown} />
  </Wrapper>
);

export const NextPage = ({ size, onClick, style }) => (
  <Wrapper onClick={onClick} style={{ ...style }}>
    <FontAwesomeIcon size={size} icon={faArrowRight} />
  </Wrapper>
);

export const PreviousPage = ({ size, onClick, style }) => (
  <Wrapper onClick={onClick} style={{ ...style }}>
    <FontAwesomeIcon size={size} icon={faArrowLeft} />
  </Wrapper>
);

export const Star = ({ favorite, onClick }) => (
  <StarIcon onClick={onClick} favorite={favorite}>
    <FontAwesomeIcon icon={faStar} />
  </StarIcon>
);
