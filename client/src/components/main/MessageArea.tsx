import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInputBox from './MessageInputBox';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IMessageArea } from '../../interfaces';

function MessageArea(props: IMessageArea) {
  return (
    <Hidden xsDown={!props.isDrawerHidden}>
      <Grid item xs={12} xl={11} lg={10} md={10} sm={9} container direction="column" className="message-area">
        <h3 className="message-area__header">
          <Hidden smUp>
            <IconButton onClick={ () => props.setIsDrawerHidden( false )} className="icon__menu" >
              <MenuIcon />
            </IconButton>
          </Hidden>
          {`# ${props.activeChannel.channel_name}`}
        </h3>
        <MessageContainer activeChannel={props.activeChannel} socket={props.socket} />
        <MessageInputBox user={props.user} activeChannel={props.activeChannel} socket={props.socket} msgInputRef={props.forwardedMsgInputRef} />
      </Grid>
    </Hidden>
  );
}

export default MessageArea;
