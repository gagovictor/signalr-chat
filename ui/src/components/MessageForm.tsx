import { useState } from 'react';
import { TextField, IconButton, InputAdornment, AppBar, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function MessageForm() {
  const [postText, setMessageText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the post data to the backend API
    const response = await fetch('https://localhost:7131/Messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: postText }),
    });

    if (response.ok) {
      setMessageText('');
    } else {
      console.error('Error creating post');
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: {
          xs: '102px',
          sm: '64px'
        },
        py: 2,
        bgcolor: 'background.paper',
        boxSizing: 'border-box' }}
      >
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: 'auto',
          }}>
          <TextField
            label="Send a message"
            value={postText}
            onChange={(e) => setMessageText(e.target.value)}
            fullWidth
            multiline
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    color="primary"
                    edge="end"
                    disabled={!postText.trim()}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginRight: 1 }}
          />
        </form>
      </Container>
    </AppBar>
  );
}

export default MessageForm;
