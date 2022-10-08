import React from "react";

const CompleteList = (props) => {
  const { onClickReturn, completeTodos } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTodo</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickReturn(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteList;
