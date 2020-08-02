import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';
import io from 'socket.io-client';
import { CssBaseline, StylesProvider, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
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
  
  const [successOpen, setSuccessOpen] = useState(false);
  const handleSuccessClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessOpen(false);
  };
  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <StylesProvider injectFirst>
      <div>
        <CssBaseline />
        { user ?
          <Chat user={user} socket={socket} /> : signup ?
            <Registration setSignup={setSignup} setSuccessOpen={setSuccessOpen} /> : <LogIn setUser={setUser} setSignup={setSignup} />
        }
        <Snackbar open={successOpen} autoHideDuration={4000} onClose={handleSuccessClose}>
          <Alert onClose={handleSuccessClose} severity="success">
            Signup successful!
            Please log in!
          </Alert>
        </Snackbar>
      </div>
    </StylesProvider>
  );
}

export default App;
