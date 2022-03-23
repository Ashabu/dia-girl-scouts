import React from 'react'
import AppLayout from '../../Compoents/AppLayout/AppLayout'
import AppHeader from '../../Compoents/Header/AppHeader'
import ImageCarousel from '../../Compoents/ImageCarousel/ImageCarousel'
import InfoBox from '../../Compoents/InfoBox/InfoBox'
import SocialMediaBox from '../../Compoents/SocialMediaBox/SocialMediaBox'
import SocialMedia from '../../StaticData/SocialMedia'



const HomePage = () => {
  const INFOBOX = new Array(6).fill(6);
  return (
    <AppLayout>
      <ImageCarousel />
      <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
        {INFOBOX.map((_, index) => (
          <InfoBox key={index} index={index} />
        ))}
      </div>
      <div style={{ marginTop: 50, display: 'flex', gap: 40, justifyContent: 'center' }}>
        {SocialMedia.map((media, index) => (
          <SocialMediaBox key={index} item={media} />
        ))}
      </div>
    </AppLayout>


  )
}

export default HomePage