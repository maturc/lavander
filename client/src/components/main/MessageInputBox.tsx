import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@material-ui/core';
import fetchInterface from '../custom_hooks/fetchInterface';
import SendIcon from '@material-ui/icons/Send';

function MessageInputBox(props: any) {
  const [message, setMessage] = useState<string>("");
  function handleButton() {
    const body = JSON.stringify({
      id_user: props.user.id_user,
      id_channel: props.activeChannel,
      message: message
    });
    fetchInterface(`/channels/messages/new`, "post", body)
      .then((data)=>{
        console.log(data);
      })
    const socketBody = {
      id_user: props.user.id_user,
      username: props.user.username,
      message: message,
      time: new Date().toLocaleString()
    };
    props.socket.emit("new message", socketBody);
    setMessage("");
  }
  return(
    <div className="message-area__input">
      <TextField
        className="message-area__input-tf"
        id="outlined-full-width"
        placeholder="Type your message"
        fullWidth
        margin="dense"
        variant="outlined"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <IconButton onClick={handleButton} >
        <SendIcon />
      </IconButton>
    </div>
  );
}

export default MessageInputBox;