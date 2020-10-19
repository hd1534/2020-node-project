/** @format */

import React, { useState } from "react";
import Movie from "./Movie";
import { useAsync } from "react-async";
import { getMovieList } from "./api";

function MovieList() {
  let [id, setId] = useState(null);
  const { data: movieList, error, isLoading, reload } = useAsync({
    // reload = promiseFn
    promiseFn: getMovieList,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movieList) return <button onClick={getMovieList}>불러오기</button>; // null 처리

  return (
    <>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id} onClick={() => setId(movie.id)}>
            {movie.title} {movie.director} {movie.year}
          </li>
        ))}
      </ul>
      <hr />
      <button onClick={reload}>다시 불러오기</button>
      {id && <Movie id={id} />}
    </>
  );
}

export default MovieList;
