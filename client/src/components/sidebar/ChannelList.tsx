import React, { useEffect, useState } from 'react';
import useChannels, { IUser } from '../custom_hooks/useChannels';
import { List, ListItem } from '@material-ui/core';

function ChannelList({ user, activeChannel, setActiveChannel }:IProps) {
  const channels: any = useChannels(user);
  const [channelList, setChannelList] = useState();

  useEffect(()=> {
    setChannelList(channels.map( (channel: any) =>
      <ListItem
        button 
        disableRipple={true}
        className={"sidebar__list-item"}
        component="a"
        key={channel.id_channel}
        onClick={ () => setActiveChannel(channel.id_channel) }
        selected={ activeChannel === channel.id_channel }
        >
        {"# "+channel.channel_name}
      </ListItem>
    ));
  }, [channels, activeChannel, setActiveChannel]);
  return(
      <List>
        { channels.length>0 ? channelList : "loading" }
      </List>
  );
}

export default ChannelList;
//add spinner on load
//fix the types !!!!!!

interface IProps {
  user: IUser,
  activeChannel: number
  setActiveChannel: any
}