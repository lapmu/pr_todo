import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top: 10%;
  background-color: white;
  color: #000;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">
        <LinkTodo>오늘 할 일</LinkTodo>
      </Link>
      <Link to="/before">
        <LinkTodo>전에 한 일</LinkTodo>
      </Link>
    </NavContainer>
  );
};

export default Nav;
