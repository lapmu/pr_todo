import { useState } from "react";

const List = ({ idx, el, changeState, deleteTodo, editTodo }) => {
  const [value, setValue] = useState(el.body);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const stateHandle = (e) => {
    changeState(Number(e.target.className));
  };

  const deleteHandle = (e) => {
    deleteTodo(Number(e.target.className));
  };

  const editHandle = () => {
    setEditValue(value);
    setEdit(!edit);
  };

  const unEditHandel = (e) => {
    if (e.key === "Enter") {
      setValue(editValue);
      setEdit(!edit);
      editTodo(idx, value);
    }
  };

  const editChangeValue = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <>
      <div className={`${idx}`} onClick={stateHandle}>
        {el.state ? "🟢" : "🔴"}
      </div>
      {edit ? (
        <input
          value={editValue}
          onChange={editChangeValue}
          onKeyUp={unEditHandel}
        ></input>
      ) : (
        <div onDoubleClick={editHandle}>{value}</div>
      )}
      <div className={`${idx}`} onClick={deleteHandle}>
        🗑
      </div>
    </>
  );
};

export default List;
