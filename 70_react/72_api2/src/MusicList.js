/** @format */

import React, { useState } from "react";
import Music from "./Music";
import { useAsync } from "react-async";
import { getMusicList } from "./api";

function MusicList() {
  let [id, setId] = useState(null);
  const { data: musicList, error, isLoading, reload } = useAsync({
    // reload = promiseFn
    promiseFn: getMusicList,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musicList) return <button onClick={getMusicList}>불러오기</button>; // null 처리

  return (
    <>
      <ul>
        {musicList.map((music) => (
          <li key={music.id} onClick={() => setId(music.id)}>
            {music.title} {music.singer}
          </li>
        ))}
      </ul>
      <hr />
      <button onClick={reload}>다시 불러오기</button>
      {id && <Music id={id} />}
    </>
  );
}

export default MusicList;
