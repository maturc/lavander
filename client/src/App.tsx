import React, { useState } from 'react';
import LogIn from './components/LogIn';
import Chat from './components/Chat';

function App() {
  const [user, setUser] = useState<object>();
  return (
    <div>
      { user? <Chat user={user} /> : <LogIn setUser={setUser} /> }
    </div>
  );
}

export default App;
