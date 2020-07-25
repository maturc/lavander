import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './sidebar/Sidebar';
import MessageArea from './main/MessageArea';


function Chat(props: any) {
  const [activeChannel, setActiveChannel] = useState();
  
  return (
  <Grid container direction="row">
    <Sidebar user={props.user} setActiveChannel={setActiveChannel} />
    <MessageArea user={props.user} activeChannel={activeChannel} socket={props.socket} />
  </Grid>
  );
}

export default Chat;
