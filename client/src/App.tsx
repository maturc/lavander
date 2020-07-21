import React, { useState } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object>();
  return (
    <div>
      { loggedIn? <Chat user={user} /> : <LogIn setLoggedIn={setLoggedIn} setUser={setUser} /> }
    </div>
  );
}

export default App;
