import { FC } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import IMessage from '../models/Message';

interface MessageProps {
    message: IMessage;
}

const Message: FC<MessageProps> = ({ message }) => {
    const formattedDate = new Date(message.sentAt).toLocaleString(); // Format ISO string to local date string

    return (
        <Box 
            sx={{ 
                mb: 1, 
                width: '100%', 
                backgroundColor: '#f3f5f7', 
                borderRadius: 1, 
                overflow: 'hidden',
                padding: 2,
                boxSizing: 'border-box',
                display: 'block'
            }}
            aria-labelledby={`message-title-${message.id}`} 
            aria-describedby={`message-content-${message.id}`}
        >
            {/* Optional Username */}
            { message.title && (
                    
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                    }}
                >
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            fontWeight: 'bold', 
                            color: 'primary.main', 
                            mr: 1 
                        }} 
                        id={`message-title-${message.id}`}
                    >
                        {message.title}
                    </Typography>
                </Box>
            )}

            {/* Message Content */}
            <Box sx={{ paddingY: 1 }}>
                <Typography 
                    variant="body1" 
                    id={`message-content-${message.id}`}
                    sx={{ textAlign: 'left', whiteSpace: 'pre-line' }}
                >
                    {message.content}
                </Typography>
            </Box>

            {/* Footer with Timestamp and Reply Button */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 1,
                        flexDirection: 'row'
                    }}
                >
                    <Typography 
                        variant="caption" 
                        color="textSecondary"
                    >
                        Sent by&nbsp;
                        <Typography variant="caption" component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {message.username}
                        </Typography>
                        &nbsp;at {formattedDate}
                    </Typography>
                </Box>
                <Tooltip title="Reply to this message">
                    <IconButton 
                        size="small" 
                        color="primary" 
                        aria-label="Reply to this message"
                    >
                        <ReplyIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Message;
