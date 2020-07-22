import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ChannelList from './sidebar/ChannelList';
import MessageContainer from './MessageContainer';

function Chat(props: any) {
  const [activeChannel, setActiveChannel] = useState(props.channels[0].id_channel);

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
        <MessageContainer activeChannel={activeChannel} />
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
  </Grid>
  );
}

export default Chat;
