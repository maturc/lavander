import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';

function MessageArea(props: any) {
  return (
      <section className="message-area">
          <h3 className="message-area__header">
            {`# ${props.activeChannel.channel_name}`}
          </h3>
          <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
          <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
      </section>
  );
}

export default MessageArea;
