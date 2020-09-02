import React from "react";
import PropTypes from "prop-types";

function Hello2({
  id = 0,
  name = "이름없음",
  color = "black",
  children = "별명없음",
  messages = [],
}) {
  return (
    <>
      <div style={{ color }}>
        학번 : {id} <br />
        이름 : {name} <br />
        별명 : {children} <br />
      </div>
      <div>
        {messages.length > 0 && messages.length + "건의 문자가 있습니다."}
        {messages.length > 0 && (
          <div>{messages.length}건의 메세지가 있습니다.</div>
        )}
      </div>
    </>
  );
}

// props 검증
Hello2.propTypes = {
  id: PropTypes.string.isRequired, // 필수이고 없으면 콘솔로만 에러메세지가 뜨고 일단은 나오긴 한다
  name: PropTypes.string.isRequired,
};

export default Hello2;
// export default 는 하나의 파일이 하나만 리턴 할 수 있다.
