import React from 'react'
import styled from 'styled-components';

const SocialMediaBox = ({item}: any) => {
  return (
    <MediaBox color={item.bgColor} href={item.link} target="_blank">
        <img src={item.icon} alt="icon" data-tip='ssss'/>
        <p>{item.text}</p>
    </MediaBox>
  )
}

export default SocialMediaBox;

const MediaBox = styled.a`
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:${({color}) =>  `${color}`};
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    color: #FFFFFF;
` 