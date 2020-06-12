/* eslint-disable no-undef */
import expect from "expect";

import { ADD_FAVORITE } from "../../constants";
import projects from "../../reducer/projects";

const initialState = {
  data: [],
  favorites: [1],
  total: 0,
  currentPage: 0,
  isLoading: false,
  error: false,
  allDismissed: false,
  showaFavorites: false,
};

describe("projects reducer", () => {
  it("should return the initial state", () => {
    expect(projects(undefined, {})).toEqual({
      data: [],
      favorites: [],
      total: 0,
      currentPage: 0,
      isLoading: false,
      error: false,
      allDismissed: false,
      showaFavorites: false,
    });
  });

  it("should handle ADD_FAVORITE", () => {
    expect(
      projects(initialState, {
        type: ADD_FAVORITE,
        payload: 1,
      })
    ).toEqual({
      ...initialState,
      favorites: [...initialState.favorites, 1],
    });
  });
});
