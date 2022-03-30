import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const AppHeader = () => {
    return (
        <Header>
            <LogoTitle>
                DIA
                <LogoSubTitle>Georgian Girl Scouts</LogoSubTitle>
            </LogoTitle>
            <Ul>
                <Li>
                    <StyledLink to={'/'}>
                        Მთავარ გვერდი
                    </StyledLink>
                </Li>
                <Li>
                    Სტუმრებისა და მშობლებისათვის
                </Li>
                <Li>
                    შემოგვიერთდით
                </Li>
                <Li>
                    <StyledLink to={'/aboutUs'}>
                        ჩვენს შესახებ
                    </StyledLink>
                </Li>
                <Li>
                    კალენდარი
                </Li>
                <Li>
                    ახალი ამბები
                </Li>
            </Ul>
        </Header>
    )
};

export default AppHeader;


const Header = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #132c66;
    display: flex;
    align-items: center;
    padding: 0 35px;
    z-index: 9;
`;

const LogoTitle = styled.div`
    font-size: 36px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;


`

const LogoSubTitle = styled.span`
    font-size: 14px;
`

const Ul = styled.ul`
    margin: 0 0 0 20px;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const Li = styled.li`
    margin: 0 15px;
    padding: 5px 0;
    text-decoration: none;
    color: #FFFFFF;
    &:hover {
        border-bottom: 2px solid #FFFFFF;
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
        text-decoration: none;
    color: #FFFFFF;
`
