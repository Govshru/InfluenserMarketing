import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: 'primary' }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="body2" color="inherit" align="center">
            &copy; {currentYear}. All rights reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
