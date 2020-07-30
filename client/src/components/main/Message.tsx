import React, { useEffect, useState } from 'react';
import timestampParse from '../custom_hooks/timestampParse';

function Message(props: any) {
  const {avatar, username, time, message} = props.message;
  const [timestamp, setTimestamp] = useState();
  useEffect(() => {
    setTimestamp(timestampParse(time));
  }, [time, setTimestamp]);
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
          {props.embeds}
        </span>
      </div>
    </div>
  );
}

export default Message;