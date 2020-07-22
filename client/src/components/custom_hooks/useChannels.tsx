import { useState, useEffect } from 'react';
import fetchInterface from './fetchInterface';

export default function useChannels(user: Iuser) {
  const [channels, setChannels] = useState<object[]>( [] );
  useEffect( () => {
    fetchInterface(`/channels/${user.id_user}`, "get")
      .then((data)=> {
        debugger
        setChannels(data);
      });
    }, [user]);
  console.log(channels)
  return channels;
}

interface Iuser {
  id_user: string,
  username: string
}