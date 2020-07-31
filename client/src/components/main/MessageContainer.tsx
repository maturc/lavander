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
          setMessageList(data.map( (message: any) => {
            const embeds = message.message.match( /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g );
            return (<ListItem key={uniqid()}>
                <Message message={message} embeds={embeds} />
              </ListItem>);
          }
          ));
          messagesEnd.current.scrollIntoView({ behavior: "auto" });
          setTimeout(()=>messagesEnd.current.scrollIntoView({ behavior: "auto" }), 500);
        }
      })
      .catch( (err) => {
        console.log(err);
        setMessageList(<h1 className="error-404">ERROR 404: Server Not Found</h1>);
      })
  }, [props.activeChannel]);
  useEffect(() => {
    props.socket.on('new message', (data: any) => {
      console.log('new message posted:', data);
      const embeds = data.message.match( /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g );
      setMessageList(
        [ ...messageList,
          <ListItem key={uniqid()}>
            <Message message={data} embeds={embeds} />
          </ListItem>
        ]);
    });
    //scroll logic could use some work, it doesn't look nice when there are a lot of images
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(()=>messagesEnd.current.scrollIntoView({ behavior: "smooth" }), 100)
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