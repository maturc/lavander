import React from 'react';
import ChannelListItem from './ChannelListItem'
import useChannels from '../custom_hooks/useChannels';

function ChannelList(props: any) {
  console.log(props)
  const channels: any = useChannels(props.user);
  console.log(channels);
  /* const channelList = channels.map( (channel: any) => {
    <li key={channel.id_channel}>
      <ChannelListItem channel={channel}/>
    </li>
  }); */
  return(
    <ul>
    </ul>
  );
}

//{ channelList }
export default ChannelList;

//fix the types !!!!!!