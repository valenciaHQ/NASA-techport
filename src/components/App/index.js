import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { fetchProjects } from "../../actions/projects";

import Cards from "../Cards";
import AppTitle from "../Apptitle";
import { Container, ErrorText, PaginationControl, CurrentPage } from "./styled";

import { NextPage, PreviousPage } from "../Icons";
import { NEXT_PAGE, PREV_PAGE } from "../../constants";

import "react-toastify/dist/ReactToastify.css";

export default () => {
  const { currentPage, error } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
      });
    }
  }, [error]);

  if (error) {
    return (
      <>
        <Container>
          <AppTitle />
          <ErrorText onClick={() => window.open("https://www.nasa.gov/")}>
            Something is wrong now, visit
            <span style={{ textDecoration: "underline" }}> www.nasa.gov</span>
          </ErrorText>
        </Container>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
      </>
    );
  }

  const handleNextPage = () => dispatch({ type: NEXT_PAGE });
  const handlePrevPage = () => dispatch({ type: PREV_PAGE });

  return (
    <Container>
      <AppTitle />
      <PaginationControl>
        {currentPage !== 0 && (
          <PreviousPage size="2x" onClick={handlePrevPage} />
        )}
        <CurrentPage>{currentPage}</CurrentPage>
        <NextPage size="2x" onClick={handleNextPage} />
      </PaginationControl>
      <Cards />
    </Container>
  );
};
