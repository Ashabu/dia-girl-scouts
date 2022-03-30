import React from 'react'
import styled from 'styled-components';
import AppFooter from '../Footer/AppFooter'
import AppHeader from '../Header/AppHeader'


const AppLayout: React.FC = ({ children }) => {
    return (
        <>
            <AppHeader />
            <LayoutBodyWrap>
                {children}
            </LayoutBodyWrap>
            <AppFooter />
        </>
    )
};

const LayoutBodyWrap = styled.div`
    width: 100%;
`

export default AppLayout