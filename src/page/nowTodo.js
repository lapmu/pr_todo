import styled from "styled-components";
import { useState } from "react";
import List from "../components/List";

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

const NowTodo = ({ data, onTodo, changeState, deleteTodo, editTodo }) => {
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
              <List
                idx={idx}
                el={el}
                changeState={changeState}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              ></List>
            </DateMapContainer>
          );
        })}
      </div>
    </NowTodoContainer>
  );
};

export default NowTodo;
