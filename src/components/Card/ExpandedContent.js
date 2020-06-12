import React from "react";
import styled from "styled-components";

import { Section, TextContainer } from "./styled";
import { Location } from "../Icons";

const ExpandedContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Locations = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  background: white;
  color: black;
  border-radius: 5px;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

const Subtitle = styled.div`
  text-decoration: underline;
  margin: 10px 0;
`;

export default ({ benefits, destinations }) => (
  <ExpandedContent>
    <Subtitle>Benefits</Subtitle>
    <TextContainer>
      <div dangerouslySetInnerHTML={{ __html: benefits }} />
    </TextContainer>
    <Subtitle>Where? </Subtitle>
    <Locations>
      {destinations.map((destination, index) => (
        <LocationWrapper key={index}>
          <Section>
            <Location color="white" style={{ marginRight: "10px" }} />
            <div>{destination}</div>
          </Section>
        </LocationWrapper>
      ))}
    </Locations>
  </ExpandedContent>
);
