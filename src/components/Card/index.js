/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

import ExpandedContent from "./ExpandedContent";
import { ArrowUp, ArrowDown } from "../Icons";

import { Container, ExpandWrapper, TextContainer, Loading } from "./styled";
import { DISMISS_PROJECT } from "../../constants";

import { getDetails } from "../../actions/projects";

const Card = ({ id }) => {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) =>
    state.projects.data.find((project) => project.id === id)
  );
  const favorite = useSelector((state) =>
    state.projects.favorites.some((fav) => fav === id)
  );

  const { loading, project } = data;

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const toogleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setTimeout(() => {
      dispatch({ type: DISMISS_PROJECT, payload: id });
    }, 600);
  };

  if (loading) {
    return (
      <Container>
        <Loading>Loading</Loading>
      </Container>
    );
  }

  return (
    <Container expanded={expanded} dismissed={dismissed} favorite={favorite}>
      <Header
        id={id}
        startDate={project.startDate}
        title={project.title}
        favorite={favorite}
        onClose={handleDismiss}
      />
      <TextContainer>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </TextContainer>
      <Footer lastUpdated={project.lastUpdated} status={project.status} />
      <ExpandWrapper onClick={toogleExpand} expanded={expanded}>
        {expanded ? <ArrowUp /> : <ArrowDown />}
      </ExpandWrapper>
      {expanded && (
        <ExpandedContent
          benefits={project.benefits}
          destinations={project.destinations}
        />
      )}
    </Container>
  );
};

export default React.memo(Card);
