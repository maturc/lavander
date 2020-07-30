import React, { useEffect, useState } from 'react';
import timestampParse from '../custom_hooks/timestampParse';

function Message(props: any) {
  const {username, time, message} = props.message;
  const [timestamp, setTimestamp] = useState();
  useEffect(() => {
    setTimestamp(timestampParse(time));
  }, [time, setTimestamp]);
  return(
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
    </div>
  );
}

export default Message;