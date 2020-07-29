import React, { useEffect, useState } from 'react';
import timestampParse from '../custom_hooks/timestampParse';

function Message(props: any) {
  const {username, time, message} = props.message;
  const [timestamp, setTimestamp] = useState();
  useEffect(() => {
    setTimestamp(timestampParse(time));
  }, [time, setTimestamp]);
  /* let n, timestamp;
  if(time.length < 21) {
    n = time.match(/\d+/g);
    timestamp = `${n[0]}/${n[1]}/${n[2]} at ${n[3]}:${n[4]}`
  } else {
    n = time.match(/\d+/g);
    timestamp = `${n[2]}/${n[1]}/${n[0]} at ${n[3]}:${n[4]}`
  } */
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