import React, { useEffect, useState, useCallback } from 'react';
import useChannels from '../custom_hooks/useChannels';
import { List, ListItem, LinearProgress } from '@material-ui/core';
import { IChannelList, IChannel } from '../../interfaces';

function ChannelList({ user, activeChannel, setActiveChannel, setIsDrawerHidden, forwardedMsgInputRef }: IChannelList) {
  const [channelList, setChannelList] = useState<Array<React.EmbedHTMLAttributes<HTMLElement>>>();
  
  const channels: Array<object> = useChannels(user);

  const handleClick = useCallback( ( channel: IChannel ): void => {
    setActiveChannel( {id_channel: channel.id_channel, channel_name: channel.channel_name} );
    setIsDrawerHidden( true );
    if( forwardedMsgInputRef.current instanceof HTMLElement )
      forwardedMsgInputRef.current.focus();
    }, [setActiveChannel, setIsDrawerHidden, forwardedMsgInputRef],
  );

  useEffect(()=> {
    console.log("times!!!!")
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
  }, [channels, activeChannel, setActiveChannel, handleClick]);
  return(
      <List className="sidebar__list">
        { channels.length > 0 ? channelList : <LinearProgress /> }
      </List>
  );
}

export default ChannelList;