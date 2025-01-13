import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";

import Logo from "../components/Common/Logo";
import NavContainer from "../components/Common/NavContainer";

export default function Footer() {
  return (
    <NavContainer component='footer'>
      <Box
        sx={{
          m: "0 auto",
          p: "30px 0",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/chihiro-h/" target="_blank" />
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} href="https://github.com/Chihiro88G" target="_blank" />
        </Box>
      </Box>
    </NavContainer>
  );
};
