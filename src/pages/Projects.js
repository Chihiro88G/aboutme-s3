import { useState, useEffect } from 'react';
import { Typography, Grid, useMediaQuery } from "@mui/material";
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import ProjectCard from "../components/Projects/ProjectCard";
import expenseSageImg from "../images/expense-sage.jpg";
import guideMeImg from "../images/guideme-jp.png";
import chihiroCaImg from "../images/chihiro-ca.png";
import cbayImg from "../images/cbay.png";
import background from "../images/projects-bg.jpg";
import Loading from '../spinner/Loading';

export default function Projects() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const gitUri = 'https://github.com/Chihiro88G/';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />
  
  return (
    <PageContainer bgImage={background}>
      <Title>Projects</Title>

      <Grid 
        container
        justifyContent="center"
        alignSelf='center'
        spacing={2}
        sx={{
          width: isDesktop ? '60%' : '100%',
          margin: '0 auto',
          paddingRight: !isDesktop && '23px',
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <ProjectCard 
            name='Expense Sage'
            overview='Expense Sage is an expense tracking app that helps you monitor your spending and see how it compares to your budget. Collaborating with @Awasjo (https://github.com/Awasjo)'
            link={gitUri + 'expense-sage-backend'}
            imgUrl={expenseSageImg}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <ProjectCard 
            name='Guide Me Jp'
            overview='GuideMeJp is for tourists planing to visit Japan and looking for tours. It offers travel tips and various guided tours available in English'
            link={gitUri + 'jp-guides'}
            imgUrl={guideMeImg}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProjectCard 
            name='Chihiro.ca'
            overview='This website is part of my personal projects. Deployed on Render using a Docker container uploaded on Github Container Registry'
            link={gitUri + 'aboutme-docker'}
            imgUrl={chihiroCaImg}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProjectCard 
            name='cBay'
            overview='E-commerce website (like eBay) to sell and buy a variery of products'
            link={gitUri + 'MERN-Cbae'}
            imgUrl={cbayImg}
          />
        </Grid>
      </Grid>
      <Typography sx={{ mt: '20px', textAlign: 'center' }}>
        More Projects to be added...👍
      </Typography>
    </PageContainer>
  )
}