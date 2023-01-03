import React, { useEffect, useState } from 'react'
import classes from '../styles/channelMobileContent.module.css'
import ChannelMenu from './ChannelMenu'
import ChannelTitle from './ChannelTitle'
import PlayList from './PlayList'
import { ChannelVideos } from '../VideosData';
import MobilePlayList from './MobilePlayList'
import Footer from './Footer'

export default function ChannelMobileContent({isDesktop}) {
  return (
    <div className={classes.container}>
        <ChannelTitle/>
        <div className={classes.content}>
          <ChannelMenu isDesktop={false}/>
          <div className={classes.playList}>
            <MobilePlayList videos={ChannelVideos} width={'small'}/>
          </div>
          <Footer/>
        </div>
    </div>
  )
}
