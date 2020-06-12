import React from "react";
import styled from "styled-components";

const AppTitleContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 3px solid red;
  border-bottom: 3px solid red;
  font-size: 30px;
  justify-content: center;
  margin: 10px 0 50px 0;
`;

const MainPart = styled.h1`
  margin-right: 15px;
  @import url("https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap");
  font-family: "Rubik Mono One", sans-serif;
`;

const SecondPart = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
  font-family: "Merriweather", serif;
`;

const AppTitle = () => (
  <AppTitleContainer>
    <MainPart>NASA</MainPart>
    <SecondPart>Techport</SecondPart>
  </AppTitleContainer>
);

export default React.memo(AppTitle);
