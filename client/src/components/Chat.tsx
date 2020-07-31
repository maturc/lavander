import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './sidebar/Sidebar';
import MessageArea from './main/MessageArea';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
    overflow: "hidden"
  }
});

function Chat(props: any) {
  const classes = useStyles();

  const [activeChannel, setActiveChannel] = useState({id_channel: 1, channel_name: "Company"});
  const [isDrawerHidden, setIsDrawerHidden] = useState<boolean>(true);
  
  return (
  <Grid container direction="row" className={classes.mainContainer}>
    <Sidebar user={props.user} activeChannel={activeChannel} setActiveChannel={setActiveChannel} isDrawerHidden={isDrawerHidden} setIsDrawerHidden={setIsDrawerHidden} />
    <MessageArea user={props.user} activeChannel={activeChannel} socket={props.socket} isDrawerHidden={isDrawerHidden} setIsDrawerHidden={setIsDrawerHidden} />
  </Grid>
  );
}

export default Chat;
