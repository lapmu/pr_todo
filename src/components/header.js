import styled from "styled-components";
import { Link } from "react-router-dom";

const White = styled.div`
  flex: 1;
`;

const Black = styled.div`
  flex: 1;
  width: 80%;
  border-radius: 25%;
  background-color: black;
`;

const Header = ({ data }) => {
  return (
    <div className="Con">
      <Link className="menu" to="/nav">
        <White />
        <White />
        <Black />
        <White />
        <Black />
        <White />
        <Black />
        <White />
        <White />
      </Link>
      <h1>{`${data} To-Do list`}</h1>
    </div>
  );
};

export default Header;
