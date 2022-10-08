import React from "react";

const IncompleteList = (props) => {
  const { onClickComplete, onClickDelete, incompleteTodos } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                完了
              </button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteList;
