import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import fetchInterface from '../custom_hooks/fetchInterface';

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
    <div>
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <Button onClick={handleButton} >
        Post
      </Button>
    </div>
  );
}

export default MessageInputBox;