import React from 'react'
import { BottomVideos, MidVideos, TopVideosData } from '../VideosData'
import MobilePlayList from './MobilePlayList'
import Dollie from '../icons/Dollie.jpg';
import Food from '../icons/Food&Drink.jpg'
import classes from '../styles/mobileContent.module.css'
import Footer from './Footer';

export default function MobileContent() {
  return (
    <div>
        <MobilePlayList videos={[...TopVideosData,...MidVideos,...BottomVideos]}></MobilePlayList>
        <Footer/>
    </div>
  )
}
