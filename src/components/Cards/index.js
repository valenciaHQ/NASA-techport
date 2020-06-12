/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { useSelector } from "react-redux";
import { PAGE_LIMIT } from "../../constants";
import Card from "../Card";
import styled from "styled-components";
import Loading from "../Loading";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 350px);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 25px;
  grid-column-gap: 50px;
`;

export default () => {
  let { data, isLoading, currentPage } = useSelector((state) => state.projects);
  data = data.slice(currentPage, currentPage + PAGE_LIMIT);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Container>
      {data.map((project) => (
        <Card key={project.id} id={project.id} />
      ))}
    </Container>
  );
};
