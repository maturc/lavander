import React from 'react';
import { Grid, Box } from '@material-ui/core';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';

function MessageArea(props: any) {
  return (
      <section className="message-area">
          <div className="message-area__header">
            Header
          </div>
          <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
          <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
      </section>
  );
}

export default MessageArea;
