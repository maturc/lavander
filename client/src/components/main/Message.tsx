import React, { useEffect, useState, useRef } from 'react';
import timestampParse from '../custom_hooks/timestampParse';
import { Backdrop, Button } from '@material-ui/core';
import uniqid from 'uniqid'

function Message(props: any) {
  const {avatar, username, time, message} = props.message;
  const [timestamp, setTimestamp] = useState();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setTimestamp(timestampParse(time));
  }, [time, setTimestamp]);


  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (emb:string) => {
    setUrl(emb)
    setOpen(!open);
  };
  
  const [embedList, setEmbedList] = useState([]);
  useEffect(() => {
    if( props.embeds )
      setEmbedList(props.embeds.map( (embed: string) => <Button key={uniqid()} onClick={()=>handleToggle(embed)}><img src={embed} alt="" className="embed" /></Button> ));
  }, [props.embeds]);

  return(
    <div className="message-area__avatar-container">
      <img className="message-area__avatar" alt="" src={avatar || "./logo.png"}/>
      <div className="message-area__message-container">
        <h2>
          <span className="message-area__username">
            {username}
          </span>
          <span className="message-area__timestamp">
            {timestamp}
          </span>
        </h2>
        <span className="message-area__message">
          {message}
        </span>
        <span>
          {embedList}
          <Backdrop className="backdrop" open={open} onClick={handleClose}>
            <img key={uniqid()} src={url} alt="" className="embed__backdrop" />
          </Backdrop>
        </span>
      </div>
    </div>
  );
}

export default Message;