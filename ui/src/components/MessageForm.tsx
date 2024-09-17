import { FC, useState } from 'react';
import { TextField, IconButton, InputAdornment, AppBar, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { HubConnection } from '@microsoft/signalr';

interface MessageFormProps {
  username: string;
  chatroom: string;
  connection: HubConnection;
}

const MessageForm: FC<MessageFormProps> = ({ username, chatroom, connection }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (content.trim()) {
      await connection.invoke('SendMessageToChatroom', { username, chatroom, title, content });
      setContent('');
      setTitle('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle Enter key without Shift (submit the form)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
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
        boxSizing: 'border-box'
      }}>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown} // Handle keypress events
            fullWidth
            multiline
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    color="primary"
                    edge="end"
                    disabled={!content.trim()}
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
