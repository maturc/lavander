import React from 'react';
import ChannelList from './ChannelList';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SidebarHeader from './SidebarHeader';

const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "#736CED",
    color: "white",
    fontWeight: "bold"
  }
});

function Sidebar(props: any) {
  const classes = useStyles();
  
  return (
    <Grid item xs={12} sm={1} container direction="column" className={classes.sidebar}>
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
