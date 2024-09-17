using Microsoft.AspNetCore.SignalR;
using MyChatApp.Models;

namespace MyChatApp.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _systemSenderName = "System";

        public async Task JoinChatroom(UserConnectionRequest request)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, request.Chatroom);
            var message = new Message
            {
                Id = Guid.NewGuid(),
                Username = _systemSenderName,
                Chatroom = request.Chatroom,
                Content = $"{request.Username} entered room \"{request.Chatroom}\".",
                SentAt = DateTime.UtcNow
            };
            await Clients.Group(request.Chatroom).SendAsync("JoinChatroom", message);
        }

        public async Task SendMessageToChatroom(SendMessageRequest request)
        {
            var message = new Message
            {
                Id = Guid.NewGuid(),
                Username = request.Username,
                Chatroom = request.Chatroom,
                Title = request.Title,
                Content = request.Content,
                SentAt = DateTime.UtcNow
            };
            await Clients.Group(request.Chatroom).SendAsync("ReceivedMessage", message);
        }
    }
}
