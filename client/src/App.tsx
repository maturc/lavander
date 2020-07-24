import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';
import io from 'socket.io-client';

function App() {
  const [user, setUser] = useState<object>();

  const [socket, setSocket] = useState<any>();
  
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  return (
    <div>
      { user? <Chat user={user} socket={socket} /> : <LogIn setUser={setUser} /> }
    </div>
  );
}

export default App;
