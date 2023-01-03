import React from 'react'
import Sidebar from './Sidebar'
import classes from '../styles/channelContent.module.css'
import MainChannelContent from './MainChannelContent'
import ChannelMobileContent from './ChannelMobileContent'

export default function ChannelContent({isDesktop}) {
  return (
    isDesktop ?
    <div className={classes.Content}>
        <Sidebar/>
        <MainChannelContent/>
    </div>
    : 
    <div className={classes.Content}>
        <ChannelMobileContent isDesktop={isDesktop}/>
    </div>
  )
}
