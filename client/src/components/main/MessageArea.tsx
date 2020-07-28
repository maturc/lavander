import React from 'react';
import { Grid, Box } from '@material-ui/core';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';

function MessageArea(props: any) {
  return (
      <Box m={1} className="message-area">
          <div>
            Header
          </div>
          <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
          <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
      </Box>
  );
}

export default MessageArea;
