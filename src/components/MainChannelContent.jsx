import React from 'react';
import channelBg from '../images/channelBg.jpg'
import ChannelTitle from './ChannelTitle';
import classes from '../styles/mainChannelContent.module.scss'
import ChannelMenu from './ChannelMenu'
import RecommendedChannels from './RecommendedChannels';
import MainVideoCard from './MainVideoCard';
import { ChannelVideos, channelMainVideo } from '../VideosData';
import PlayList from './PlayList';

export default function MainChannelContent() {
  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
          <img src={channelBg} className={classes.channelBg}/>
          <ChannelTitle/>
        </div>
      <div className={classes.topContainer}>
          <ChannelMenu isDesktop={true}/>
          <div className={classes.channels}>
            <RecommendedChannels/>
          </div>
          <MainVideoCard item={channelMainVideo}/>
      </div>
      <div className={classes.playList}>
          <PlayList title={'Margaret Phelps videos'} videos={ChannelVideos} width={'small'}/>
      </div>
    </div>
 
  )
}
