import NowTodo from "./page/nowTodo";
import BeforeTodo from "./page/beforeTodo";
import Header from "./components/header";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const MainContainer = styled.div`
  background-color: #b8cada;
  width: 320px;
  height: 568px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [data, setData] = useState({
    name: null,
    pretodo: {},
    nowtodo: [],
  });

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(Error, err));
  }, []);

  const onTodo = (body) => {
    const newTodo = {
      id: uuidv4(),
      state: false,
      body,
    };
    const newData = { ...data };
    newData["nowtodo"].unshift(newTodo);
    setData(newData);
    fetch("http://localhost:3001/data", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("good"))
      .catch((err) => console.log(Error, err));
  };

  const changeState = (idx) => {
    const newData = { ...data };
    newData["nowtodo"][idx].state = !newData["nowtodo"][idx].state;
    setData(newData);
    fetch("http://localhost:3001/data", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("good"))
      .catch((err) => console.log(Error, err));
  };

  const deleteTodo = (idx) => {
    const newData = { ...data };
    const front = newData["nowtodo"].slice(0, idx);
    const back = newData["nowtodo"].slice(idx + 1);
    newData["nowtodo"] = [...front, ...back];
    setData(newData);
    fetch("http://localhost:3001/data", {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("good"))
      .catch((err) => console.log(Error, err));
  };

  const editTodo = (idx, body) => {
    const newData = { ...data };
    newData["nowtodo"][idx].body = body;
    setData(newData);
    console.log(newData);
    fetch("http://localhost:3001/data", {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("good"))
      .catch((err) => console.log(Error, err));
  };

  return (
    <BrowserRouter>
      <MainContainer>
        <header>
          <Header data={data.name} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <NowTodo
                  data={data["nowtodo"]}
                  onTodo={onTodo}
                  changeState={changeState}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              }
            />
            <Route
              path="/before"
              element={<BeforeTodo data={data["pretodo"]} />}
            />
            <Route path="/nav" element={<Nav />} />
          </Routes>
        </main>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
