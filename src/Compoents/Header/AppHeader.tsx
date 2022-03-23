import React from 'react'
import styled from 'styled-components'

const AppHeader = () => {
    return (
        <Header>
            This is a header
        </Header>
    )
};

export default AppHeader;


const Header = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #132c66;
`
