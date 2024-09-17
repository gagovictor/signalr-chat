import { useState } from 'react';
import { Box } from '@mui/material';
import ChatFeed from '../components/ChatFeed';
import MessageForm from '../components/MessageForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WaitingRoom from '../components/WaitingRoom';
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import IMessage from '../models/Message';

export default function Home() {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [username, setUsername] = useState<string>();
  const [chatroom, setChatroom] = useState<string>();

  const joinRoom = async (username: string, chatroom: string) => {
    try {
      setUsername(username);
      setChatroom(chatroom);

      const conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7092/Chat', { withCredentials: true })
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();
      
      conn.on('ReceivedMessage', (message: IMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
      
      conn.on('JoinChatroom', (message: IMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      await conn.start();
      await conn.invoke('JoinChatroom', { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginTop: '64px',
          paddingBottom: { xs: '198px', sm: '161px' },
        }}
      >
        {connection?.state ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <ChatFeed messages={messages} />
            <MessageForm username={username!} chatroom={chatroom!} connection={connection} />
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WaitingRoom joinRoom={joinRoom} />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
