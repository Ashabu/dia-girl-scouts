import React from 'react'
import AppHeader from '../../Compoents/Header/AppHeader'
import ImageCarousel from '../../Compoents/ImageCarousel/ImageCarousel'
import InfoBox from '../../Compoents/InfoBox/InfoBox'



const HomePage = () => {
  return (
    <>
      <AppHeader />
      <ImageCarousel />
      <div style={{display: 'flex', gap: 20}}>
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>

    </>
  )
}

export default HomePage