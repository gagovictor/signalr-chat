import React, { useState } from 'react';
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

  const joinRoom = async (username: string, chatroom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7092/Chat', { withCredentials: true })
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();
      
      conn.on('ReceivedMessage', (username: string, message: string) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: new Date().toISOString(),
            username,
            title: '',
            content: message,
            sentAt: new Date().toISOString(),
          }
        ]);
      });
      
      conn.on('JoinChatroom', (username: string, message: string) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: new Date().toISOString(),
            username,
            title: '',
            content: message,
            sentAt: new Date().toISOString(),
          }
        ]);
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
            <MessageForm />
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
