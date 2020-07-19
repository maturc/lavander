import React from 'react';
import { Grid } from '@material-ui/core';

function Chat() {
  return (
  <Grid container direction="row">
    <Grid item xs={12} sm={4} container direction="column">
    <Grid item>
      Sidebar header
    </Grid>
    <Grid item>
      Channels
    </Grid>
    <Grid item>
      Invite
    </Grid>
    </Grid>
    <Grid item xs={12} sm={8} container direction="column">
    <Grid item>
      Header
    </Grid>
    <Grid item>
      Body
    </Grid>
    <Grid item>
      Msg box
    </Grid>
    </Grid>
  </Grid>
  );
}

export default Chat;
