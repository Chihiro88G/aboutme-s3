import { useState, useEffect } from 'react';
import { Box, useMediaQuery, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import background from '../images/home-bg.png';
import myImg from "../images/me.jpg";
import Typewriter from '../hooks/useTypewriter';
import PageContainer from '../components/Common/PageContainer';
import MyName from '../components/Home/MyName';
import MyInfo from '../components/Home/MyInfo';
import LinkedInBtn from '../components/Home/LinkedInBtn';
import ResumeBtn from '../components/Home/ResumeBtn';
import Loading from '../spinner/Loading';
import ProfileContainer from '../components/Home/ProfileContainer';
import CertificationBadges from '../components/Home/CertificationBadges';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = [background, myImg];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };
  
    Promise.all(imageUrls.map(loadImage))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading/>

  return (
    <PageContainer bgImage={background}>
      <ProfileContainer>
        <Box
          sx={{
            display: isDesktop ? 'block' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: isDesktop ? '' : '0 auto',
          }}
        >
          <MyName>Chihiro Hasegawa</MyName>
          <Box>
            <MyInfo>
              <LaptopMacIcon />Full Stack Developer
            </MyInfo>              
            <MyInfo>
              <LocationOnIcon />Toronto, Canada
            </MyInfo>
          </Box>

          <Box>
            <LinkedInBtn />
            <ResumeBtn />
          </Box>
        </Box>

        <Avatar
          alt="Remy Sharp"
          src={myImg}
          sx={{ 
            width: 250,
            height: 250,
            mt: isDesktop ? '60px' : '',
            m: isDesktop ? '' : '20px auto'
          }}
        />
      </ProfileContainer>

      <Typewriter text= " Let's Connect!" />

      <CertificationBadges />

    </PageContainer>
  )
}