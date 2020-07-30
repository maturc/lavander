import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';
import { Grid } from '@material-ui/core';

function MessageArea(props: any) {
  return (
    <Grid item xs={12} xl={11} lg={10} md={10} sm={9} container direction="column" className="message-area">
      <h3 className="message-area__header">
        {`# ${props.activeChannel.channel_name}`}
      </h3>
      <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
      <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
    </Grid>
  );
}

export default MessageArea;
