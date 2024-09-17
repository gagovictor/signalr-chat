import { Toolbar, Typography, Container, AppBar } from '@mui/material';

export default function Header() {

  return (
    <AppBar position="fixed">
      <Toolbar component="header" color="primary">
        <Container 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ marginY: '10px' }}
          >
            Live Chat
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
