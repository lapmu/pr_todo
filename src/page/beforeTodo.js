import styled from "styled-components";

const BeforeTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;

const DateMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  background-color: white;
  padding: 3%;
`;

const DataMapContainer = styled.div`
  margin-top: 6%;
`;

const Date = styled.div`
  margin-bottom: 3%;
`;

const BeforeTodo = ({ data }) => {
  const dataDate = Object.keys(data);
  return (
    <BeforeTodoContainer>
      {dataDate.map((el, idx) => {
        return (
          <DataMapContainer key={idx}>
            <Date>{el}</Date>
            {data[el].map((el, idx) => {
              return (
                <DateMapContainer key={idx}>
                  <div>{el.state ? "🟢" : "🔴"}</div>
                  <div>{el.body}</div>
                  <div>🗑</div>
                </DateMapContainer>
              );
            })}
          </DataMapContainer>
        );
      })}
    </BeforeTodoContainer>
  );
};

export default BeforeTodo;
