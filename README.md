# MyChatApp

A real-time chat application that allows users to send and receive messages in different chatrooms. This project is divided into two main parts:

- **Backend API**: Built using .NET 6.0, it manages chatrooms, handles WebSocket connections using SignalR, and facilitates messaging.
- **Frontend UI**: Built using React, it provides the user interface for sending and receiving messages.

## Project Structure

- /api
  - Backend API using .NET 6.0 and SignalR
- /ui
  -  Frontend UI using React and Material-UI


## Features

### Backend (API)
- **.NET 6.0** and **SignalR** for real-time messaging.
- Support for multiple chatrooms.
- REST API for user connections and message handling.
- Persistence, validation, authentication and authorization not implemented.

### Frontend (UI)
- **React** with **Material-UI** for the user interface.
- Real-time messaging with SignalR.

## Prerequisites

### Backend (API)
- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- SQL Server (for any database integration, if applicable)

### Frontend (UI)
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- npm or yarn for managing dependencies

## Getting Started

### Backend (API)

1. Navigate to the `/api` folder:
   ```bash
   cd api
   ```
2. Restore dependencies and build the project:
   ```bash
   dotnet restore
   dotnet build
   ```
3. Run the API:
   ```bash
   dotnet run
   ```
4. The API should be running at http://localhost:5000.

### Frontend (UI)
1. Navigate to the /ui folder:
   ```bash
   cd ui
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The UI should be running at http://localhost:3000.

## SignalR Integration
* Backend: The backend uses SignalR to handle real-time communication with connected clients.
  * Users join specific chatrooms, and their messages are broadcast to everyone in the same room.
  * Methods:
    * `JoinChatroom`: Adds a user to a chatroom.
    * `SendMessageToChatroom`: Broadcasts a message to a specific chatroom.
* Frontend: The React frontend connects to the SignalR hub to send and receive messages in real time.

## Example Usage

### Sending a Message (Backend)
```json
POST /chat/send
{
  "username": "john_doe",
  "chatroom": "Main",
  "title": "Greetings",
  "content": "Hello, world!"
}
```

### Receiving a Message (Frontend)
Messages will be automatically received in real-time by users in the same chatroom.

## License

This project is for **demonstration purposes only** and is licensed under a custom license that **prohibits commercial use**. You are free to:
- Use the project for personal or educational purposes.
- Modify the project for your own learning or development.

However, you are **not permitted** to:
- Use the project for commercial purposes.
- Distribute or sell any portion of this project as part of a commercial product or service.

If you would like to use this project in any way beyond these conditions, please contact the author for permission at [victor@gago.works](mailto:victor@gago.works).
