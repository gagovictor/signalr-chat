namespace MyChatApp.Models
{
    public class SendMessageRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Chatroom { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
    }
}
