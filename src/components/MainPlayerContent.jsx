import React from 'react'
import VideoPlayer from './VideoPlayer'
import classes from '../styles/mainPlayerContent.module.scss'
import {Like, Dislike, Share, More} from '../icons/icons'
import { playerNextVideos } from '../VideosData'
import MobilePlayList from './MobilePlayList'
import PlayerNextVideosPlaylist from './PlayerNextVideosPlaylist'
import Switch from '@mui/material/Switch'
import AntSwitch from './mySwitch'

export default function MainPlayerContent() {
  return (
    <div className={classes.container}>
        <div className={classes.videoContainer}>
            <VideoPlayer source={'video.mp4'}/>
            <div className={classes.text}>
                <h2>Dude You Re Getting A Telescope</h2>
                <div className={classes.info}>
                    <span>123k views</span>
                    <div className={classes.controllers}>
                        <button>
                            <Like/>
                            <span>123k</span>
                        </button>
                        <button>
                            <Dislike/>
                            <span>435k</span>
                        </button>
                        <button>
                            <Share/>
                            <span>Share</span>
                        </button>
                        <div className={classes.more}>
                            <More/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.nextVideosContainer}>
            <div className={classes.title}>
                <h2>Next</h2>
                <div className={classes.autoplay}>
                    <span>AUTOPLAY</span>
                    <AntSwitch defaultChecked width={44} height={28} translate={16}/>
                </div>
            </div>
            <PlayerNextVideosPlaylist videos={playerNextVideos} width={'next'}/>
        </div>
        <div className={classes.authorContainer}>
            <div className={classes.author}>
                <img src={require('../icons/fooddrink.jpg')}/>
                <div className={classes.authorInfo}>
                    <h2>Food & Drink</h2>
                    <span className={classes.published}>Published on 14 Jun 2019</span>
                    <span className={classes.description}>A successful marketing plan relies 
                    heavily on the pulling-power of advertising copy. Writing 
                    result-oriented ad copy is difficult, as it must appeal to, 
                    entice, and convince consumers to take action. There is no 
                    magic formula to write perfect ad copy; it is based on a number
                    of factors, including ad placement, demographic, even the 
                    consumer’s mood when they see your ad. </span>
                    <span className={classes.showMore}>Show more</span>
                </div>
            </div>
            <div className={classes.subscribe}>
                <button>Subscribe 2.3m</button>
            </div>
        </div>
  
    </div>
  )
}
