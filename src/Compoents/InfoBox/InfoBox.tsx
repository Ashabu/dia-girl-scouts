import React from 'react'
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { useWindowResize } from '../../hooks/useWindowResize';

const InfoBox = ({index}: any) => {
  const { windowWidth, windowHeight } = useWindowResize();

  const bgColors = (index: number) => {
    let value;
    switch (index) {
      case 0:
        value = '#ffa500'
        break;
        case 1:
        value = '#ffff00'
        break;
        case 2:
        value = '#008000'
        break;
        case 3:
        value = '#0000ff'
        break;
        case 4:
        value = '#4b0082'
        break;
        case 5:
        value = '#ee82ee'
        break;
      default: 
      value = '#0000ff'
        break;
    }
    return value;
  }

  return (
    <StyledLink index={index} hovercolor = {bgColors(index)}>
      <p>{windowWidth}</p>
      <p>{windowHeight}</p>
    </StyledLink>

  );
};




export default InfoBox;

const appear = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;


const StyledLink = styled.div<{index: number, hovercolor: string}>`
     width: 250px;
     height:170px;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: antiquewhite;
     box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
     transition: all 0.5s ease-in-out;
     animation-name: ${appear}; 
     animation-timing-function: ease-in;
     animation-duration: ${({index}) => `1.${index*2}s`};
     border-radius: 5px;
     cursor: pointer;
     &:hover {
      transform: scale(1.1);
      background-color: ${({hovercolor}) => `${hovercolor}`};
     };
`


