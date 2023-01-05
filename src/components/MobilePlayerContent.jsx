import React from 'react'
import classes from '../styles/mobilePlayerContent.module.scss'
import VideoPlayer from './VideoPlayer'
import { ArrowDown, Like, Dislike, Share } from '../icons/icons'
import PlayerNextVideosPlaylist from './PlayerNextVideosPlaylist'
import AntSwitch from './mySwitch'
import { playerNextVideos } from '../VideosData'
import Footer from './Footer'

export default function MobilePlayerContent() {
  return (
    <div className={classes.container}>
        <div className={classes.videoContainer}>
            <VideoPlayer source={'video.mp4'} isDesktop={false}/>
            <div className={classes.text}>
                <div className={classes.arrow}>
                    <ArrowDown/>
                </div>
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
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.authorInfo}>
            <div className={classes.author}>
                <img src={require('../icons/fooddrink.jpg')}/>
                <div className={classes.text}>
                    <h2>Food & Drink</h2>
                    <span>245K subscribed</span>
                </div>
            </div>
            <span className={classes.subscribe}>Subscribe</span>
        </div>
        <div className={classes.nextVideosContainer}>
            <div className={classes.title}>
                <h2>Next</h2>
                <div className={classes.autoplay}>
                    <span>AUTOPLAY</span>
                    <AntSwitch defaultChecked width={30} height={19} translate={12}/>
                </div>
            </div>
            <PlayerNextVideosPlaylist videos={playerNextVideos} width={'full'}/>
            <Footer/>
        </div>
    </div>
  )
}
