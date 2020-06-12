import React from "react";
import styled from "styled-components";
import { DateWrapper, DateEntry, Section } from "./styled";
import { Star } from "../Icons";
import { useDispatch } from "react-redux";
import { ADD_FAVORITE } from "../../constants";

const Wrapper = styled(Section)`
  border-bottom: 1px solid white;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: center;

  overflow: scroll;
`;

const Title = styled.div`
  font-size: larger;
  max-height: 80px;
`;

const Close = styled.div`
  display: relative;
  top: 0;
  right: 0;

  :hover {
    cursor: pointer;
  }
`;

export default ({ id, startDate, title, favorite, onClose }) => {
  const dispatch = useDispatch();
  const handleAddFavorite = () => dispatch({ type: ADD_FAVORITE, payload: id });
  return (
    <Wrapper>
      <DateWrapper>
        <DateEntry>Start date: </DateEntry>
        <DateEntry>{startDate}</DateEntry>
        <Star
          style={{ marginTop: "10px" }}
          favorite={favorite}
          onClick={() => !favorite && handleAddFavorite()}
        />
      </DateWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Close onClick={onClose}>x</Close>
    </Wrapper>
  );
};
