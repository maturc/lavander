import React, { useState, useRef } from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './sidebar/Sidebar';
import MessageArea from './main/MessageArea';
import { IChatProps } from '../interfaces';

function Chat( props: IChatProps ) {
  const [activeChannel, setActiveChannel  ] = useState({id_channel: 1, channel_name: "Company"});
  const [isDrawerHidden, setIsDrawerHidden] = useState<boolean>(true);
  
  const msgInputRef = useRef<React.MutableRefObject<HTMLInputElement>>(null);

  return (
  <Grid container direction="row" className="chat">
    <Sidebar     user={props.user} activeChannel={activeChannel} setActiveChannel={setActiveChannel} isDrawerHidden={isDrawerHidden} setIsDrawerHidden={setIsDrawerHidden} forwardedMsgInputRef={msgInputRef} />
    <MessageArea user={props.user} activeChannel={activeChannel} socket={props.socket}               isDrawerHidden={isDrawerHidden} setIsDrawerHidden={setIsDrawerHidden} forwardedMsgInputRef={msgInputRef} />
  </Grid>
  );
}

export default Chat;
