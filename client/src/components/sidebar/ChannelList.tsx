import React, { useEffect, useState } from 'react';
import useChannels from '../custom_hooks/useChannels';

function ChannelList(props: any) {
  const channels: any = useChannels(props.user);
  const [channelList, setChannelList] = useState();

  useEffect(()=> {
    setChannelList(channels.map( (channel: any) =>
      <li key={channel.id_channel} onClick={ () => props.setActiveChannel(channel.id_channel) }>
        {channel.channel_name}
      </li>
    ));
    if(channels.length>0) {
      props.setActiveChannel(channels[0].id_channel);
    }
  }, [channels])
  return(
    <ul>
      { channels.length>0 ? channelList : "loading" }
    </ul>
  );
}

export default ChannelList;
//add spinner on load
//fix the types !!!!!!