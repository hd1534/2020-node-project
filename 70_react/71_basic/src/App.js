import React, { useReducer } from "react";
import { useRef, createContext } from "react";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";

export const MovieContext = createContext(null);

function reducer(state, action) {
  const { movie, movieList } = state;
  switch (action.type) {
    case "CREATE":
      return {
        movieList: movieList.concat({ id: action.nextId.current, ...movie }),
        movie: { title: "", director: "", year: "", active: false },
      };
    case "CHANGE":
      const { name, value } = action;
      return {
        ...state,
        movie: { ...movie, [name]: value },
      };
    case "REMOVE":
      return {
        ...state,
        movieList: movieList.filter((movie) => movie.id !== action.id),
      };
    case "TOGGLE":
      return {
        ...state,
        movieList: movieList.map((movie) =>
          movie.id === action.id ? { ...movie, active: !movie.active } : movie
        ),
      };
    default:
      throw new Error("Unhandled action");
  }
}

function App() {
  const nextId = useRef(4);
  const inputTitle = useRef();

  var initialState = {
    movie: {
      title: "",
      director: "",
      year: "",
    },
    movieList: [
      {
        id: 1,
        title: "스타워즈",
        director: "조지 루카스",
        year: "1977",
        active: false,
      },
      {
        id: 2,
        title: "아바타",
        director: "제임스 카메론",
        year: "2009",
        active: false,
      },
      {
        id: 3,
        title: "인터스텔라",
        director: "크리스토퍼 놀란",
        year: "2014",
        active: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MovieContext.Provider value={dispatch}>
        <CreateMovie
          title={state.movie.title}
          director={state.movie.director}
          year={state.movie.year}
          inputTitle={inputTitle}
          nextId={nextId}
        />
        <MovieList movieList={state.movieList} />
      </MovieContext.Provider>
    </>
  );
}

export default App;
