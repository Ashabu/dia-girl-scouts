import React from 'react'
import AppLayout from '../../Compoents/AppLayout/AppLayout'
import ImageCarousel from '../../Compoents/ImageCarousel/ImageCarousel'
import InfoBox from '../../Compoents/InfoBox/InfoBox'
import SocialMediaBox from '../../Compoents/SocialMediaBox/SocialMediaBox'
import { CompanyInfo } from '../../StaticData/PageSections'
import SocialMedia from '../../StaticData/SocialMedia'
import styled from 'styled-components';



const HomePage = () => {
  return (
    <AppLayout>
      <PageContainer>

   
      <ImageCarousel />
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center' }}>
        {CompanyInfo.map((item, index) => (
          <InfoBox key={index} index={index} item={item}/>
        ))}
      </div>
      <div style={{ marginTop: 50, display: 'flex', gap: 40, justifyContent: 'center' }}>
        {SocialMedia.map((media, index) => (
          <SocialMediaBox key={index} item={media} />
        ))}
      </div>
      </PageContainer>
    </AppLayout>


  )
}

export default HomePage;

const PageContainer = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100vh;
    
`