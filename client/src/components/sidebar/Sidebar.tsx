import React from 'react';
import ChannelList from './ChannelList';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import SidebarHeader from './SidebarHeader';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ISidebar } from '../../interfaces';

function Sidebar( props: ISidebar ) {
  return (
    <>
      <Hidden xsDown={props.isDrawerHidden}>
        <Grid item xs={12} xl={1} lg={2} md={2} sm={3} container direction="column" className="sidebar">
            <Grid item>
              <SidebarHeader />
              <Hidden smUp>
                <IconButton onClick={ () => props.setIsDrawerHidden( true )} className="icon__menu-exit" >
                  <ChevronLeftIcon/>
                </IconButton>
              </Hidden>
            </Grid>
            <Grid item>
              <ChannelList
                user                 = {props.user}
                activeChannel        = {props.activeChannel}
                setActiveChannel     = {props.setActiveChannel}
                setIsDrawerHidden    = {props.setIsDrawerHidden}
                forwardedMsgInputRef = {props.forwardedMsgInputRef}
              />
            </Grid>
          </Grid>
      </Hidden>
    </>
  );
}

export default Sidebar;
