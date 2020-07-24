import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ChannelList from './sidebar/ChannelList';
import MessageContainer from './MessageContainer';
import MessageBox from './MessageBox';


function Chat(props: any) {
  const [activeChannel, setActiveChannel] = useState();
  
  return (
  <Grid container direction="row">
    <Grid item xs={12} sm={4} container direction="column">
      <Grid item>
        Sidebar header
      </Grid>
      <Grid item>
        <ChannelList
          user={props.user}
          setActiveChannel={setActiveChannel}
        />
      </Grid>
      <Grid item>
        Invite
      </Grid>
    </Grid>
    <Grid item xs={12} sm={8} container direction="column">
      <Grid item>
        Header
      </Grid>
      <Grid item>
        <MessageContainer activeChannel={activeChannel} socket={props.socket} />
      </Grid>
      <Grid item>
        <MessageBox user={props.user} activeChannel={activeChannel} socket={props.socket} />
      </Grid>
    </Grid>
  </Grid>
  );
}

export default Chat;
