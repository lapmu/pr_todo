import styled from "styled-components"
import { Link } from "react-router-dom"

const Header = () =>{
    
    const Plus = styled.div`
        flex: 1;
        background-color: black;
        height: 70%;
        clip-path: polygon(0% 40%, 40% 40%, 40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%);
        margin-right: 3%;
    ` 
    const White = styled.div`
        flex: 1;
    `

    const Black = styled.div`
        flex: 1;
        width: 80%;
        border-radius: 25%;
        background-color: black;
    `
    let name = ''

    return(
    <div className="Con">
        <Link className="menu" to='/nav'>
            <White/>
            <White/>
            <Black/>
            <White/>
            <Black/>
            <White/>
            <Black/>
            <White/>
            <White/>
        </Link>
        <h1>{`${name} To-Do list`}</h1>
        <Plus></Plus>
    </div>
    )
}

export default Header
