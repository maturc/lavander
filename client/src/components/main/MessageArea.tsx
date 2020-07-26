import React from 'react';
import { Grid, Box } from '@material-ui/core';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  main: {
    backgroundColor: "#FEF9FF"
  }
});

function MessageArea(props: any) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={11} container direction="column" className={classes.main}>
      <Box m={1}>
        <Grid item>
          Header
        </Grid>
        <Grid item>
          <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
        </Grid>
        <Grid item>
          <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} />
        </Grid>
      </Box>
    </Grid>
  );
}

export default MessageArea;
