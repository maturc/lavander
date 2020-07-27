import React, { useEffect, useState } from 'react';
import useChannels, { IUser } from '../custom_hooks/useChannels';
import { List, ListItem, createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
  sidebarButton: {
    "&:hover": {
      backgroundColor: "#6a60e6",
    },
  },    
});

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      "root": {
        color: "#bababa",
        "&$selected": {
          color: "white",
          backgroundColor: "#6057DA",
          "&:hover": {
            backgroundColor: "#6057DA",
          },
        }
      }
    }
  }
});
function ChannelList({ user, activeChannel, setActiveChannel }:IProps) {
  const classes = useStyles();

  const channels: any = useChannels(user);
  const [channelList, setChannelList] = useState();

  useEffect(()=> {
    setChannelList(channels.map( (channel: any) =>
    <ThemeProvider theme={theme}>
      <ListItem
        button 
        disableRipple={true}
        className={classes.sidebarButton}
        component="a"
        key={channel.id_channel}
        onClick={ () => setActiveChannel(channel.id_channel) }
        selected={ activeChannel === channel.id_channel }
        >
        {"# "+channel.channel_name}
      </ListItem>
    </ThemeProvider>
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