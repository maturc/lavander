import React from 'react';

function Message(props: any) {
  const message = props.message;
  return(
    <>
      {message.username}
      {message.time}
      {message.message}
    </>
  );
}

export default Message;