import React, { useEffect, useState } from 'react';
import Message from './Message';
import uniqid from 'uniqid'
import fetchInterface from './custom_hooks/fetchInterface';

function MessageContainer(props: any) {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    fetchInterface(`/channels/messages/${props.activeChannel}`, "get")
      .then( (data)=> {
        console.log(data);
        if(data) {
          setMessages(data);
        }
      });
  }, [props.activeChannel]);

  const messageList = messages.map( (message: any) =>
  <li key={uniqid()}>
    <Message message={message} />
  </li>
  );
  return(
    <ul>
      {messageList}
    </ul>
  );
}

export default MessageContainer;