import { AppBar, Container, Toolbar } from '@mui/material';

// container for header and footer
export default function NavContainer({ children, component }) {
  return (
    <AppBar position="static" component={component} style={{ boxShadow: 'none'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
}