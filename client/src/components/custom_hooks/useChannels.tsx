import { useState, useEffect } from 'react';
import fetchInterface from './fetchInterface';

export default function useChannels(user: IUser) {
  const [channels, setChannels] = useState<object[]>( [] );
  useEffect( () => {
    //fetchInterface(`/channels/${user.id_user}`, "get")
    fetchInterface(`/channels`, "get")
      .then((data)=> {
        setChannels(data);
      });
    }, [user]);
  return channels;
}

export interface IUser {
  id_user: string,
  username: string
}