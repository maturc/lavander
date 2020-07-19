import React, { useState } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <div>
      { loggedIn? <Chat /> : <LogIn setLoggedIn={setLoggedIn}/> }
    </div>
  );
}

export default App;
