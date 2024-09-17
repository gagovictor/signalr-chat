import { Paper, Button, TextField, Alert, Snackbar } from '@mui/material';
import { FormEvent, useState } from 'react';
import generateRandomUsername from '../util/random-name';

interface WaitingRoomProps {
  joinRoom: (username: string, chatroom: string) => Promise<void>; 
}

const WaitingRoom: React.FC<WaitingRoomProps> = ({ joinRoom }) => {
  const [username, setUsername] = useState<string>(generateRandomUsername());
  const [chatroom, setChatroom] = useState<string>('Main');
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await joinRoom(username, chatroom);
      setSnackbarMessage('Successfully connected to the chatroom!');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Failed to connect to the chatroom.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'stretch',
          padding: '32px',
          backgroundColor: '#f5f5f5',
          width: 480,
          maxWidth: '100%',
          borderRadius: 4,
        }}
      >
        <TextField
          name="username"
          label="Username"
          value={username}
          required
          focused
          onChange={e => setUsername(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="chatroom"
          label="Chatroom"
          value={chatroom}
          required
          onChange={e => setChatroom(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Enter Chatroom
        </Button>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default WaitingRoom;