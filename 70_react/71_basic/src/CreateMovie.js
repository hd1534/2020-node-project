import React, { useContext } from "react";
import { MovieContext } from "./App";

function CreateMovie({ title, director, year, inputTitle, nextId }) {
  const dispatch = useContext(MovieContext);

  const onCreate = () => {
    nextId.current += 1;
    inputTitle.current.focus();
    dispatch({
      type: "CREATE",
      nextId,
    });

    nextId.current += 1;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  };

  return (
    <>
      <input
        name="title"
        placeholder="제목"
        onChange={onChange}
        value={title}
        ref={inputTitle}
      />
      <input
        name="director"
        placeholder="감독"
        onChange={onChange}
        value={director}
      />
      <input name="year" placeholder="연도" onChange={onChange} value={year} />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default CreateMovie;
