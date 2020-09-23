import React, { useState } from "react";
import { useRef } from "react";
import MusicList from "./MusicList";
import CreateMusic from "./CreateMusic";

function App() {
  const [music, setMusic] = useState({
    title: "",
    singer: "",
    active: false,
  });

  const { title, singer } = music;

  let [musicList, setMusicList] = useState([
    { id: 1, singer: "아이유", title: "Eight", active: false },
    { id: 2, singer: "유산슬", title: "합정역5번출구", active: false },
    { id: 3, singer: "악동뮤지션", title: "크레셴도", active: false },
  ]);

  const nextId = useRef(4);
  const inputSinger = useRef();

  const onCreate = () => {
    // setMusicList([...musicList, { id: nextId.current, ...music }]);
    setMusicList(musicList.concat({ id: nextId.current, ...music }));
    setMusic({ title: "", singer: "", active: false });
    nextId.current += 1;
    inputSinger.current.focus();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setMusic({ ...music, [name]: value });
  };

  const onRemove = (id) => {
    setMusicList(musicList.filter((item) => item.id !== id));
  };

  const onToggle = (id) => {
    setMusicList(
      musicList.map((music) =>
        music.id === id ? { ...music, active: !music.active } : music
      )
    );
  };

  return (
    <>
      <CreateMusic
        title={title}
        singer={singer}
        onChange={onChange}
        onCreate={onCreate}
        inputSinger={inputSinger}
      />
      <MusicList
        musicList={musicList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
