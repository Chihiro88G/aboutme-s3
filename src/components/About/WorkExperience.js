import { Box, Typography, Divider } from '@mui/material';

export default function WorkExperience() {

  return (
    <Box
      m={1}
      sx={{
        border: 1,
        borderColor: 'lightgrey',
        borderRadius: '15px',
      }}
    >
      <Typography m={2}>Work Experience</Typography>
      <Divider />

      <Box m={2}>
        <Typography mb={1} fontSize={13}>
          Full Stack Developer @ Avondx Inc.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Typography fontSize={13} color='grey'>
            2023 Aug. - Current
          </Typography>
          <Typography fontSize={13} textAlign='right' color='grey'>
            Toronto, ON
          </Typography>
        </Box>

        <Typography mt={2} mb={1} fontSize={13}>
          Software Engineer @ SPIC
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Typography fontSize={13} textAlign='right' color='grey'>
            2019 Oct. - 2021 Feb.
          </Typography>
          <Typography fontSize={13} color='grey'>
            Tokyo
          </Typography>
        </Box>

        <Typography mt={2} mb={1} fontSize={13}>
          QA Engineer @ Taiju Life Insurance
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Typography fontSize={13} textAlign='right' color='grey'>
            2013 Apr. - 2019 May
          </Typography>
          <Typography fontSize={13} color='grey'>
            Tokyo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}