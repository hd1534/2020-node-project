import React from "react";

function CreateMovie({
  title,
  director,
  year,
  onChange,
  onCreate,
  inputTitle,
}) {
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
