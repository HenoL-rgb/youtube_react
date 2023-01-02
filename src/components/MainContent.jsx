import React from 'react'
import { BottomVideos, MidVideos, TopVideosData } from '../VideosData'
import PlayList from './PlayList'
import Dollie from '../icons/Dollie.jpg';
import Food from '../icons/Food&Drink.jpg'
import classes from '../styles/mainContent.module.css'

export default function MainContent() {
  return (
    <div className={classes.mainContent}>
        <PlayList title={'Dollie Blair'} videos={TopVideosData} image={Dollie} width={'small'}/>
        <PlayList title={'Recommended'} videos={MidVideos} width={'large'}/>
        <PlayList title={'Food & Drink'} videos={BottomVideos} image={Food} width={'small'} subtext={'Recommended channel for you'} subscribe={'2.3m'}/>
    </div>
  )
}
