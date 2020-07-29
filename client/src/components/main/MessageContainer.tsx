import React, { useEffect, useState, useRef, RefObject } from 'react';
import Message from './Message';
import uniqid from 'uniqid'
import fetchInterface from '../custom_hooks/fetchInterface';
import { ListItem, List } from '@material-ui/core';


function MessageContainer(props: any) {
  const [messageList, setMessageList] = useState<any>();

  const messagesEnd: RefObject<any> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchInterface(`/channels/messages/${props.activeChannel.id_channel}`, "get")
      .then( (data)=> {
        console.log(data);
        if(data) {
          setMessageList(data.map( (message: any) =>
            <ListItem key={uniqid()}>
              <Message message={message} />
            </ListItem>
          ));
          messagesEnd.current.scrollIntoView({ behavior: "auto" });
        }
      });
  }, [props.activeChannel]);
  useEffect(() => {
    props.socket.on('new message', (data: any) => {
      console.log('new message posted:', data);
      setMessageList(
        [ ...messageList,
          <ListItem key={uniqid()}>
            <Message message={data} />
          </ListItem>
        ]);
    });
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    return ()=> props.socket.off('new message');
  }, [messageList]);

  return(
    <List className="message-area__container">
        {messageList}
        <div ref={messagesEnd}>
        </div>
    </List>
  );
}

export default MessageContainer;