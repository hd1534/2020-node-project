import React, { useState } from "react";
import { useRef } from "react";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";

function App() {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: "",
  });

  const { title, director, year } = movie;

  let [movieList, setMovieList] = useState([
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
  ]);

  const nextId = useRef(4);
  const inputTitle = useRef();

  const onCreate = () => {
    // setMovieList([...movieList, { id: nextId.current, ...movie }]);
    setMovieList(movieList.concat({ id: nextId.current, ...movie }));
    setMovie({ title: "", director: "", year: "", active: false });
    nextId.current += 1;
    inputTitle.current.focus();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const onRemove = (id) => {
    setMovieList(movieList.filter((item) => item.id !== id));
  };

  const onToggle = (id) => {
    setMovieList(
      movieList.map((movie) =>
        movie.id === id ? { ...movie, active: !movie.active } : movie
      )
    );
  };

  return (
    <>
      <CreateMovie
        title={title}
        director={director}
        year={year}
        onChange={onChange}
        onCreate={onCreate}
        inputTitle={inputTitle}
      />
      <MovieList
        movieList={movieList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
