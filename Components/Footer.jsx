import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="relative" sx={{ top: 'auto', bottom: 0, bgcolor: 'primary' }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="body2" color="inherit" align="center">
          © {new Date().getFullYear()} Influencer Marketing. All Rights Reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
