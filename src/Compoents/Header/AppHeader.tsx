import React from 'react'
import styled from 'styled-components'

const AppHeader = () => {
    return (
        <Header>
            This is a header
        </Header>
    )
};

const Header = styled.div`
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0f172a;
`



export default AppHeader;
