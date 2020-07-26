import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';
import io from 'socket.io-client';
import { CssBaseline } from '@material-ui/core';
import Registration from './components/Registration';

function App() {
  const [user, setUser] = useState<object>();
  const [signup, setSignup] = useState<boolean>(false);

  const [socket, setSocket] = useState<any>();
  
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  return (
    <div>
      <CssBaseline />
      { user ?
        <Chat user={user} socket={socket} /> : ( signup ?
          <Registration setSignup={setSignup} /> : <LogIn setUser={setUser} setSignup={setSignup} /> )
      }
    </div>
  );
}

export default App;
