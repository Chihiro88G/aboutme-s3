import { Typography } from "@mui/material";

export default function Bold({ children }) {

  return (
    <Typography
      fontWeight='bold' 
      textAlign='center'
      m='30px'
      display='block'
    >
      {children}
    </Typography>
  )
}