using Microsoft.AspNetCore.SignalR;
using MyChatApp.Models;

namespace MyChatApp.Hubs
{
    public class ChatHub : Hub
    {

        public async Task JoinChat(UserConnectionRequest request)
        {
            await Clients.All.SendAsync("ReceivedMessage", "admin", $"{request.Username} has joined the \"{request.Chatroom}\" chat.");
        }

        public async Task JoinChatroom(UserConnectionRequest request)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, request.Chatroom);
            await Clients.Group(request.Chatroom).SendAsync("JoinChatroom", "admin", $"{request.Username} entered room \"{request.Chatroom}\".");
        }
    }
}
