import { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import background from "../images/about-bg.jpg"
import Loading from '../spinner/Loading';
import Paragraph from '../components/Common/Paragraph';
import WorkExperience from '../components/About/WorkExperience';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 960px)');

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading/>

  return (
    <PageContainer bgImage={background}>
      <Title>About</Title>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          justifyContent: isDesktop ? 'space-evenly' : '',      
        }}
      >
        <Box
          sx={{
            width: isDesktop ? '60%' : '100%'
          }}
        >
          <Paragraph>
            While my first career as a QA Engineer for 6 years, where I collaborated with software developers for projects,
            I got curiosity in programming and software development.
            And this experience let me switch my career as a software developer.
          </Paragraph>
          <Paragraph>
            I've been enjoying my journey, from work to my side projects. Exciting news is that I've been collaborating with my friend and developing an expense management mobile app! We're very excited to launch it sometime in 2024!
          </Paragraph>
          <Paragraph>
            Feel free to visit my side projects and let's connect!
          </Paragraph>
        </Box>
        <Box
          sx={{
            width: isDesktop ? '30%' : '100%',
            mt: isDesktop ? '40px' : '0',
            mb: '20px'
          }}
        >
          <WorkExperience />
        </Box>
      </Box>

      {/* <Title>Outside of Work</Title> */}

    </PageContainer>
  )
}