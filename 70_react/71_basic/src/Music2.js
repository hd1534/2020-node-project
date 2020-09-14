// 클래스형 컴포넌트
import React, { Component } from "react";

class Music2 extends Component {
  render() {
    const { music, onRemove, onToggle } = this.props;
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
}

export default Music2;
