import { FC } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import IMessage from '../models/Message';
import MessageIcon from '@mui/icons-material/Message';

interface MessageProps {
    message: IMessage;
}

const Message: FC<MessageProps> = ({ message }) => {
    const formattedDate = new Date(message.sentAt).toLocaleString();

    return (
        <Box 
            sx={{ 
                mb: 1, 
                width: '100%', 
                backgroundColor: '#f3f5f7', 
                borderRadius: 1, 
                overflow: 'hidden',
                paddingRight: 1,
                paddingLeft: 2,
                py: 1.5,
                boxSizing: 'border-box',
                display: 'block'
            }}
            aria-labelledby={`message-title-${message.id}`} 
            aria-describedby={`message-content-${message.id}`}
        >
            {/* Optional Title */}
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
            <Box>
                <Typography 
                    variant="body1" 
                    id={`message-content-${message.id}`}
                    sx={{ textAlign: 'left', whiteSpace: 'pre-line' }}
                >
                    {message.content}
                </Typography>
            </Box>

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
                    <MessageIcon color="primary" />
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
                <Tooltip title="Not implemented at the moment.">
                {/* <Tooltip title="Reply to this message"> */}
                    <IconButton 
                        size="small" 
                        color="primary" 
                        aria-label="Reply to this message"
                        disabled
                    >
                        <ReplyIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Message;
