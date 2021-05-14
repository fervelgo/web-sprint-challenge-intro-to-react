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

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: 'white';
    }

`
const StyledButton = styled.button `
    border: solid white;
    border-radius: 2px;
    background-color: white;
    color: black;
    &:hover {
        transform: scale(1.2);
    }


`

const Character = ({info, action}) => {
    return (
        <StyledComp>
            {info.name}
            <StyledButton onClick={()=> action(info.name)}>Who dis?</StyledButton>
        </StyledComp>
    )
}


export default Character;