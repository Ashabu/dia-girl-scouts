import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import images from '../../StaticData/SliderImages';


const ImageCarousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const sliderTimout = useRef<null | NodeJS.Timeout>(null);
  const INTERVAL = 4000;

  useEffect(() => {
    sliderTimout.current = setTimeout(() => {
      if(sliderTimout.current) {
        clearTimeout(sliderTimout.current);
      };
      setImgIndex(prev =>( prev === images.length - 1) ? 0 : prev + 1)
    }, INTERVAL);

    return () => clearTimeout(sliderTimout.current!);
  }, [imgIndex])


  return (
    <SliderWrap>
      <SliderBody index={imgIndex}>
        {
          images.map(image => (
            <SliderItem key={image.id}>
              <SliderImg src={image.imgUrl} alt='img' />
            </SliderItem>
          ))
        }
      </SliderBody>
      <NavButtonWrap>
        {
          images.map((_, index) => (
            <NavButton active={imgIndex === index ? true : false} onClick={() => setImgIndex(index)} />
          ))
        }
      </NavButtonWrap>
    </SliderWrap>
  );
};

const SliderWrap = styled.div`
    position: relative;
    object-fit: contain;
    overflow: hidden;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 22rem;
    box-sizing: border-box;

    @media (min-width: 640px) {
    margin: 4rem 2rem;
    grid-template-rows:30rem;
  }
  
`

const SliderBody = styled.div<{ index: number }>`
    grid-row: 1/ -1;
    grid-column: 1 / span 1;
    order: 0;
    display: flex;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => `translateX(${-props.index * 100}%)`};
`

const SliderItem = styled.div`
    display: block;
    height: 100%;
    width: 100%;
    flex: 1 0 auto;
`

const SliderImg = styled.img<{ url?: string }>`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

  ${({ url }) => css`
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 50% 30%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .3), rgba(0,0,0, .2)), url("${url}");
  `};

  @media (min-width: 640px) {
    border-bottom-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
  }
`

const NavButtonWrap = styled.div`
    position: absolute;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: end;
    gap: 1rem;

    @media (min-width: 640px) {
      bottom: 1.5rem;
      gap: 1.5rem;
    }
`

const NavButton = styled.div<{ active: boolean, onClick: any }>`
    height: ${(props) => (props.active ? '0.4rem' : '0.25rem')};
    width: 4rem;
    background: #ffffff;
    opacity: ${(props) => (props.active ? '1' : '0.4')};
    cursor: pointer;
`
export default ImageCarousel;
