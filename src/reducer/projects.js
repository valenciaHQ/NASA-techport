import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  DISMISS_PROJECT,
  FILL_DETAILS,
  NEXT_PAGE,
  LOADING_DETAILS,
  PREV_PAGE,
  ADD_FAVORITE,
} from "../constants";

const initialState = {
  data: [],
  favorites: [],
  total: 0,
  currentPage: 0,
  isLoading: false,
  error: false,
  allDismissed: false,
  showaFavorites: false,
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data.map((data) => ({ ...data, loading: true })),
        total: action.payload.total,
        isLoading: false,
        allDismissed: false,
      };
    }
    case FETCH_PROJECTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case LOADING_DETAILS: {
      return {
        ...state,
        data: state.data.map((project) => {
          if (project.id === action.payload.id) {
            return { ...project, loading: true };
          }
          return { ...project };
        }),
      };
    }
    case FILL_DETAILS: {
      return {
        ...state,
        data: state.data.map((project) => {
          if (project.id === action.payload.id) {
            return { ...project, loading: false, project: action.payload };
          }
          return { ...project };
        }),
      };
    }

    case NEXT_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    case PREV_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }

    case DISMISS_PROJECT: {
      return {
        ...state,
        data: state.data.filter((project) => project.id !== action.payload),
      };
    }

    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    default:
      return initialState;
  }
};

export default projects;
