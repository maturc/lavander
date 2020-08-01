import { useState, useEffect } from 'react';
import fetchInterface from './fetchInterface';
import { IUser } from '../../interfaces';

export default function useChannels( user: IUser ) {
  const [channels, setChannels] = useState<object[]>( [] );
  useEffect( () => {
    fetchInterface( `/channels`, "get" )
      .then( data => {
        setChannels(data);
      });
    }, [user]);
  return channels;
}