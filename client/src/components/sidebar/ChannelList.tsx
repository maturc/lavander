import React from 'react';
import useChannels from '../custom_hooks/useChannels';

function ChannelList(props: any) {
  const channels: any = useChannels(props.user);
  const channelList = channels.map( (channel: any) =>
    <li key={channel.id_channel} onClick={ props.setActiveChannel(channel.id_channel) }>
      {channel.channel_name}
    </li>
  );
  return(
    <ul>
      { channelList }
    </ul>
  );
}

//{ channelList }
export default ChannelList;

//fix the types !!!!!!