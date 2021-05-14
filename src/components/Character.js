import React from 'react';
import styled from 'styled-components';

//const StyledComp = styled.div `

//`

//const StyledButton = styled.button ``

const Character = ({info, action}) => {
    return (
        <div>
            {info.name}
            <button onClick={()=> action(info.name)}></button>
        </div>
    )
}


export default Character;