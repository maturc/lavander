import React from 'react';
import ChannelList from './ChannelList';
import { Grid } from '@material-ui/core';
import SidebarHeader from './SidebarHeader';

function Sidebar(props: any) {
  return (
    <Grid item xs={12} sm={1} container direction="column" className="sidebar">
      <Grid item>
        <SidebarHeader />
      </Grid>
      <Grid item>
        <ChannelList
          user={props.user}
          activeChannel={props.activeChannel}
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
