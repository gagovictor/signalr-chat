export default interface IMessage {
    id: string;
    username: string;
    chatroom: string;
    title: string;
    content: string;
    sentAt: string;
}

export default interface ISendMessageRequest {
    username: string;
    chatroom: string;
    title: string;
    content: string;
}
