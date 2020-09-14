import React from "react";
import Music2 from "./Music2";

function Music({ music, onRemove, onToggle }) {
  const { id, title, singer, active } = music;
  const style = {
    color: active ? "blue" : "black",
    cursor: "pointer",
  };
  return (
    <div>
      <b style={style} onClick={() => onToggle(id)}>
        {title}
      </b>{" "}
      ({singer})<button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function MusicList({ musicList, onRemove, onToggle }) {
  return (
    <>
      {musicList.map((item) => (
        <Music2
          key={item.id}
          music={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default MusicList;
