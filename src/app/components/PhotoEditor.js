'use client'
import React from 'react'
import styled from 'styled-components'

function PhotoEditor() {
    return (
        <div>
            <h1>
                Photo Editor
            </h1>
            {/* <input type='file'/> */}
            <Input type='file' />
        </div>
    )
}

export default PhotoEditor

const Input = styled.input`
width: 10rem;
height: 5rem;
background-color: var(--main-color);
position: relative;
&:hover{
    cursor: pointer;
};
&::after{
    content:'';
    position: absolute;
    width: inherit;
    height:inherit ;
    background-color: aqua;
    top: 0px;
    left: 0px;
    z-index: 2;
}
`