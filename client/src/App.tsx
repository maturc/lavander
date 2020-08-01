import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';
import io from 'socket.io-client';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import Registration from './components/Registration';
import './main.css';
import { IUser } from './interfaces';

function App() {
  const [user,   setUser  ] = useState<IUser>();
  const [signup, setSignup] = useState<boolean>(false);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);
  
  return (
    <StylesProvider injectFirst>
      <div>
        <CssBaseline />
        { user ?
          <Chat user={user} socket={socket} /> : signup ?
            <Registration setSignup={setSignup} /> : <LogIn setUser={setUser} setSignup={setSignup} />
        }
      </div>
    </StylesProvider>
  );
}

export default App;
