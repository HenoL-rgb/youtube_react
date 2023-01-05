import React from 'react'
import { BottomVideos, MidVideos, TopVideosData } from '../../VideosData'
import MobilePlayList from '../MobilePlayList'
import classes from '../../styles/mobileContent.module.scss'
import Footer from '../Footer';

export default function MobileContent() {
  return (
    <div>
        <MobilePlayList videos={[...TopVideosData,...MidVideos,...BottomVideos]} width={'full'}></MobilePlayList>
        <Footer/>
    </div>
  )
}
