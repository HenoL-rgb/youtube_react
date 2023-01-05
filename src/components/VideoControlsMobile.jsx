import React, { useEffect, useRef, useState } from 'react'
import classes from '../styles/VideoControlsMobile.module.scss'
import {Play, Pause, FullScreen, Next, Volume, Subtitles, VideoSettings, Size} from '../icons/icons'

export default function VideoControls(
    {playing, visibility, duration, playedSeconds, handlePlay, handleVolume, handleProgress, }
    ) {

    const [currentTime, setCurrentTime] = useState(0);
    const [fullTime, setFullTime] = useState(0);
    useEffect(() => {
      changeCurrentTime();
    
    }, [playedSeconds])

    useEffect(() => {
        const isVisible = visibility == true ? 'visible' : 'hidden'
        const opacity = visibility ? 1 : 0;
        refContainer.current.style.visibility = isVisible;
        refContainer.current.style.opacity = opacity;
      }, [visibility])
    
    useEffect(() => {
        const time = new Date();
        time.setSeconds(duration);
        time.setMinutes(duration / 60);
        setFullTime(`${time.toLocaleTimeString(undefined, {minute: 'numeric', second: '2-digit'})}`);
    }, [duration])

    function changeCurrentTime() {
        const time = new Date();
        time.setSeconds(playedSeconds);
        time.setMinutes(playedSeconds / 60)
        setCurrentTime( `${time.toLocaleTimeString(undefined, {minute: 'numeric', second: '2-digit'})}`)
    }

    const getBackgroundSize = (value, max) => {
        const percent = (+value / max)*100;

        return {
            backgroundSize: `${percent}% 100%`,
        };
    };

    const refContainer = useRef();
  return (
    <div className={classes.container} ref={refContainer}>
        
        <div onClick={handlePlay}>
            {playing ? <Pause/> : <Play/>}
        </div>
        <div className={classes.time}>
            <span>{currentTime}</span>
            <input type={'range'} value={playedSeconds} style={getBackgroundSize(playedSeconds, duration)}
                max={duration} min='0' step='0.05' onChange={(e) => handleProgress(e.target.value)}/>
            <span>{fullTime}</span>
        </div>
        <Volume/>
    </div>
  )
}
