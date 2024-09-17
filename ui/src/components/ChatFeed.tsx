import { Container } from '@mui/material';
import Message from './Message';
import IMessage from '../models/Message';

interface ChatFeedProps {
  messages: IMessage[];
}

const ChatFeed: React.FC<ChatFeedProps> = ({ messages }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      overflowY: 'auto',
      py: 2,
    }}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Container>
  );
}

export default ChatFeed;
  