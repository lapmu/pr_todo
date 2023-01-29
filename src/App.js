import NowTodo from './page/nowTodo';
import MyPage from './page/myPage';
import BeforeTodo from './page/beforeTodo';
import Header from './components/header';
import Welcome from './page/welcome';
import FirstPage from './page/firstPage';
import Nav from './components/nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const MainContainer = styled.div`
    background-color: #B8CADA;
    width: 320px;
    height: 568px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <BrowserRouter>
    <MainContainer>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/now' element={<NowTodo/>}/>
          <Route path='/before' element={<BeforeTodo/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/nav' element={<Nav/>}/>
        </Routes>
      </main>
    </MainContainer>
    </BrowserRouter>
  );
}

export default App;
