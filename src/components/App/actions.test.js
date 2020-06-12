/* eslint-disable no-undef */
import * as actions from "../../actions/projects";
import * as types from "../../constants";

describe("add favorite action", () => {
  it("should create a add favorite action for a certain id", () => {
    const id = 1;
    const expectedAction = {
      type: types.ADD_FAVORITE,
      payload: id,
    };
    expect(actions.addFavorite(id)).toEqual(expectedAction);
  });
});

describe("next page action", () => {
  it("should create a next page action", () => {
    const expectedAction = {
      type: types.NEXT_PAGE,
    };
    expect(actions.nextPage()).toEqual(expectedAction);
  });
});
