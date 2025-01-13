import { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Title from "../components/Common/Title";
import PageContainer from "../components/Common/PageContainer";
import Bold from "../components/Common/Bold";
import background from "../images/skills-bg.png"
import { JsIcon, JavaIcon, PythonIcon, TsIcon, SpringIcon, SqlServerIcon, ReactIcon, NodejsIcon, ExpressIcon, MuiIcon, HtmlIcon, CssIcon, MySqlIcon, OracleIcon, GitIcon, GitHubIcon, SvnIcon } from '../components/Icons/Icons';
import Loading from '../spinner/Loading';

export default function Skills() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading/>

  return (
    <PageContainer bgImage={background}>
      <Title>Skills</Title>

      <Box width='80%' m='auto'>
        <Bold>Programming Languages</Bold>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          mb='70px'
        >
          <Grid item xs={6} md={3}>
            <JsIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <TsIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <JavaIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <PythonIcon />
          </Grid>
        </Grid>

        <Bold>Web Technologies</Bold>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          mb='70px'
        >
          <Grid item xs={6} md={3}>
            <ReactIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <NodejsIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <ExpressIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <SpringIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <MuiIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <HtmlIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <CssIcon />
          </Grid>
        </Grid>


        <Bold>Database</Bold>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          mb='70px'
        >
          <Grid item xs={6} md={3}>
            <MySqlIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <OracleIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <SqlServerIcon />
          </Grid>
        </Grid>

        <Bold>Version Control</Bold>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          mb='70px'
        >
          <Grid item xs={6} md={3}>
            <GitIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <GitHubIcon />
          </Grid>
          <Grid item xs={6} md={3}>
            <SvnIcon />
          </Grid>
        </Grid>

        <Bold>Exposure to Infrastructure</Bold>
        <Typography textAlign='center'>
            Docker, AWS(S3, RDS, Lambda, ECS)
        </Typography>
      </Box>
    </PageContainer>
  )
}