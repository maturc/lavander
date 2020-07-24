import React, { useEffect, useState } from 'react';
import Message from './Message';
import uniqid from 'uniqid'
import fetchInterface from './custom_hooks/fetchInterface';

function MessageContainer(props: any) {
  const [messageList, setMessageList] = useState<any>();

  useEffect(() => {
    fetchInterface(`/channels/messages/${props.activeChannel}`, "get")
      .then( (data)=> {
        console.log(data);
        if(data) {
          setMessageList(data.map( (message: any) =>
            <li key={uniqid()}>
              <Message message={message} />
            </li>
          ));
        }
      });
  }, [props.activeChannel]);

  useEffect(() => {
    props.socket.on('new message', (data: any) => {
      console.log('new message posted:', data);
      setMessageList(
        [ ...messageList,
          <li key={uniqid()}>
            <Message message={data} />
          </li>
        ]);
    });

    return ()=> props.socket.off('new message');
  }, [messageList]);

  return(
    <ul>
      {messageList}
    </ul>
  );
}

export default MessageContainer;