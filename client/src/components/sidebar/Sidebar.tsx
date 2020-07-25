import React from 'react';
import ChannelList from './ChannelList';
import { Grid } from '@material-ui/core';

function Sidebar(props: any) {
  return (
    <Grid item xs={12} sm={1} container direction="column">
      <Grid item>
        Sidebar header
      </Grid>
      <Grid item>
        <ChannelList
          user={props.user}
          setActiveChannel={props.setActiveChannel}
        />
      </Grid>
      <Grid item>
        Invite
      </Grid>
    </Grid>
  );
}

export default Sidebar;
