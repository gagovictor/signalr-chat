import { Toolbar, Typography, Link, IconButton, Container, Box, AppBar } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, py: { xs: 2, sm: 0 }}}>
      <Toolbar component="footer" color="primary">
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
            variant="body2" 
            sx={{ marginBottom: { xs: '10px', sm: '0' }, width: { xs: '100%', sm: 'auto' } }}
          >
            &copy; 2024 Gago.Works. All rights reserved.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Link
              href="https://gago.works"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gago.Works"
              color="#ffffff"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                marginRight: '10px' 
              }}
            >
              <IconButton color="inherit">
                <LinkIcon />
              </IconButton>
              Gago.Works
            </Link>
            <Link
              href="https://github.com/gagovictor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              color="#ffffff"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none'
              }}
            >
              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>
              GitHub
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
