/** @format */

import React, { useReducer, useEffect } from "react";
import { useAsync } from "react-async";
import { getMovie } from "./api";

function Movie({ id }) {
  const { isLoading, data: movie, error, reload } = useAsync({
    promiseFn: getMovie,
    id,
    watch: id, //id 값이 바뀌면 다시 호출
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movie) return <button onClick={getMovie}>불러오기</button>; // null 처리

  return (
    <>
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
      <hr />
      <button onClick={reload}>다시 불러오기</button>
    </>
  );
}

export default Movie;
