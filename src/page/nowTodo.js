import styled from "styled-components";
import { useState } from "react";

const NowTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;

const DateMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;
  background-color: white;
  padding: 3%;
`;

const TodoInput = styled.input`
  margin: 6% 0;
  padding: 3%;
`;

const NowTodo = ({ data, onTodo }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onButtonHandle = (e) => {
    if (value !== "" && e.key === "Enter") {
      onTodo(value);
      setValue("");
    }
  };

  const stateHandle = (e) => {
    console.log(e);
  };
  return (
    <NowTodoContainer>
      <TodoInput
        type="text"
        placeholder="Todo"
        onChange={onChangeValue}
        onKeyUp={onButtonHandle}
        value={value}
      ></TodoInput>
      <div>
        {data.map((el, idx) => {
          return (
            <DateMapContainer key={idx}>
              <div key={idx} onClick={stateHandle}>
                {el.state ? "🟢" : "🔴"}
              </div>
              <div>{el.body}</div>
              <div>🗑</div>
            </DateMapContainer>
          );
        })}
      </div>
    </NowTodoContainer>
  );
};

export default NowTodo;
