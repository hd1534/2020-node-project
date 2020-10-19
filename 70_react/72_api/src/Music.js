/** @format */

import React, { useReducer, useEffect } from "react";
import { useAsync } from "react-async";
import { getMusic } from "./api";

function Music({ id }) {
  const { isLoading, data: music, error, reload } = useAsync({
    promiseFn: getMusic,
    id,
    watch: id, //id 값이 바뀌면 다시 호출
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!music) return <button onClick={getMusic}>불러오기</button>; // null 처리

  return (
    <>
      <h3>{music.title}</h3>
      <p>{music.singer}</p>
      <hr />
      <button onClick={reload}>다시 불러오기</button>
    </>
  );
}

export default Music;
