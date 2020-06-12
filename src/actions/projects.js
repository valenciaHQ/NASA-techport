import axios from "axios";

import {
  BASE_URL,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  PROJECTS_ENDPOINT,
  API_KEY_PARAM,
  NEXT_PAGE,
  FILL_DETAILS,
  LOADING_DETAILS,
  ADD_FAVORITE,
} from "../constants";

const getErrorMessage = (response) => {
  if (response && response.response) {
    switch (response.response.status) {
      case 429: {
        return "Oops, i've exceeded my cuota, try again later.";
      }
      default:
        return "An error ocurred";
    }
  }
  return "An error ocurred";
};

export const fetchProjects = () => async (dispatch) => {
  const url = `${BASE_URL}${PROJECTS_ENDPOINT}?${API_KEY_PARAM}=${process.env.REACT_APP_API_KEY}`;
  try {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    const response = await axios.get(url);
    if (response.status === 200) {
      return dispatch({
        type: FETCH_PROJECTS_SUCCESS,
        payload: {
          data: response.data.projects.projects,
          total: response.data.projects.totalCount,
        },
      });
    }
  } catch (err) {
    return dispatch({
      type: FETCH_PROJECTS_ERROR,
      payload: getErrorMessage(err),
    });
  }
};

export const getDetails = (id) => async (dispatch) => {
  const url = `${BASE_URL}${PROJECTS_ENDPOINT}/${id}?${API_KEY_PARAM}=${process.env.REACT_APP_API_KEY}`;
  dispatch({ type: LOADING_DETAILS, payload: id });
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return dispatch({
        type: FILL_DETAILS,
        payload: response.data.project,
      });
    }
  } catch (err) {
    return dispatch({ type: FETCH_PROJECTS_ERROR, payload: err });
  }
};

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const addFavorite = (id) => ({
  type: ADD_FAVORITE,
  payload: id,
});
