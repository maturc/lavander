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
            let embedList;
            if( embeds )
              embedList = embeds.map( (embed: string) => <img key={uniqid()} src={embed} alt="" className="embed" /> );
            return (<ListItem key={uniqid()}>
                <Message message={message} embeds={embedList} />
              </ListItem>);
          }
          ));
          messagesEnd.current.scrollIntoView({ behavior: "auto" });
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
      let embedList;
      if( embeds )
        embedList = embeds.map( (embed: string) => <img key={uniqid()} src={embed} alt="" className="embed" /> );
      setMessageList(
        [ ...messageList,
          <ListItem key={uniqid()}>
            <Message message={data} embeds={embedList} />
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