import React, { useEffect, useState } from 'react';
import useChannels from '../custom_hooks/useChannels';
import { List, ListItem, LinearProgress } from '@material-ui/core';
import { IChannelList, IChannel } from '../../interfaces';

function ChannelList({ user, activeChannel, setActiveChannel, setIsDrawerHidden, forwardedMsgInputRef }: IChannelList) {
  const [channelList, setChannelList] = useState<Array<React.EmbedHTMLAttributes<HTMLElement>>>();
  
  const channels: Array<object> = useChannels(user);

  function handleClick( channel: IChannel ): void {
    setActiveChannel( {id_channel: channel.id_channel, channel_name: channel.channel_name} );
    setIsDrawerHidden( true );
    if( forwardedMsgInputRef.current instanceof HTMLElement )
      forwardedMsgInputRef.current.focus();
  }

  useEffect(()=> {
    setChannelList( channels.map( (channel: any) =>
      <ListItem
        button
        disableRipple={true}
        className={"sidebar__list-item"}
        component="a"
        key={channel.id_channel}
        onClick={ () => handleClick(channel)}
        selected={ activeChannel.id_channel === channel.id_channel }
        >
          {"# "+channel.channel_name}
      </ListItem>
    ));
  }, [channels, activeChannel, setActiveChannel]);
  return(
      <List className="sidebar__list">
        { channels.length > 0 ? channelList : <LinearProgress /> }
      </List>
  );
}

export default ChannelList;