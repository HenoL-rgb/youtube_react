import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import classes from '../styles/channelContent.module.css'
import MobileContent from './MobileContent'
import MainChannelContent from './MainChannelContent'

export default function ChannelContent({isDesktop}) {
  return (
    isDesktop ?
    <div className={classes.Content}>
        <Sidebar/>
        <MainChannelContent/>
    </div>
    : 
    <div className={classes.Content}>
    </div>
  )
}
