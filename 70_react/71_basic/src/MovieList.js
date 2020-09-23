import React, { useEffect, useMemo } from "react";

function Movie({ movie, onRemove, onToggle }) {
  const { id, title, director, year, active } = movie;
  const style = {
    color: active ? "blue" : "black",
    cursor: "pointer",
  };

  // 업데이트시 호출
  useEffect(() => {
    console.log("movie이 업데이트됨");
    return () => {
      console.log("movie이 업데이트될거임");
    };
  }, [movie]);

  return (
    <div>
      <b style={style} onClick={() => onToggle(id)}>
        {title}
      </b>{" "}
      ({director},{year})<button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function MovieList({ movieList, onRemove, onToggle }) {
  const countActiveMovie = () => {
    return movieList.filter((movie) => movie.active).length;
  };
  const count = useMemo(countActiveMovie, [movieList]);

  return (
    <>
      {movieList.map((item) => (
        <Movie
          key={item.id}
          movie={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      <hr />
      <div>Active된 Movie 수 : {count}</div>
    </>
  );
}

export default MovieList;
