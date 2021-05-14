import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div `
    width: 60%auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;

    border: 2px solid white;
    border-radius: 2px;
    color: yellow;
    font: 'Monaco';

    @media (max-width: 500px){
        width: 100%;
    }

`

//const StyledButton = styled.button ``

const Character = ({info, action}) => {
    return (
        <StyledComp>
            {info.name}
            <button onClick={()=> action(info.name)}></button>
        </StyledComp>
    )
}


export default Character;