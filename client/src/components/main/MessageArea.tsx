import React from 'react';
import { Grid } from '@material-ui/core';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';


function MessageArea(props: any) {
  return (
    <Grid item xs={12} sm={11} container direction="column">
      <Grid item>
        Header
      </Grid>
      <Grid item>
        <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
      </Grid>
      <Grid item>
        <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
      </Grid>
    </Grid>
  );
}

export default MessageArea;
