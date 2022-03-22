import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useWindowResize } from '../../hooks/useWindowResize';

const InfoBox = () => {
    const {windowWidth, windowHeight} = useWindowResize();

  return (
    <StyledLink >
        <p>{windowWidth}</p>
        <p>{windowHeight}</p>
    </StyledLink>
    
  );
};

const StyledLink = styled.div`
     border: 1px solid red;
     width: 250px;
     height:150px
`

export default InfoBox