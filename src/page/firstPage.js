import styled from "styled-components"

const FirstPage = () =>{
    const FirstPageCon = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
    `
    const NameInput = styled.input`
        margin-top: 30%;
        height: 15%;
    `
    const NameButton = styled.button`
        margin-top: 10%;
        width: 40%;
        height: 15%;
    `

    return(
    <FirstPageCon>
        <h1>Welcome 42's</h1>
        <h1>당신은 누구신가요?</h1>
        <NameInput  type='text' title="이름" placeholder="닉네임 or 이름"/>
        <NameButton>확인</NameButton>
    </FirstPageCon>
    )
}

export default FirstPage