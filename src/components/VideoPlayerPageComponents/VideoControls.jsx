import React, { useEffect, useRef, useState } from 'react'
import classes from '../../styles/videoControls.module.scss'
import {Play, Pause, FullScreen, Next, Volume, Subtitles, VideoSettings, Size} from '../../icons/icons'

export default function VideoControls(
    {playing, volume, duration, playedSeconds, handlePlay, 
        handleVolume, handleProgress, handleFullScreen, classN}
    ) {

    const [currentTime, setCurrentTime] = useState(0);
    const [fullTime, setFullTime] = useState(0);
    useEffect(() => {
      changeCurrentTime();
    
    }, [playedSeconds])

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

  return (
    <div className={[classes.container, classN].join(' ')} >
        <div className={classes.time}>
            <div className={classes.text}>
                <span>{currentTime}</span>
                <span>{fullTime}</span>
            </div>
            <input type={'range'} value={playedSeconds} style={getBackgroundSize(playedSeconds, duration)}
                max={duration} min='0' step='0.05' onChange={(e) => handleProgress(e.target.value)}/>
        </div>
        <div className={classes.controllers}>
            <div className={classes.leftControllers}>
                <div className={classes.playBtn} onClick={handlePlay}>
                    {playing ? <Pause/> : <Play/>}
                </div>
                <Next/>
                <div className={classes.volume}>
                    <Volume/>
                    <input type={'range'} value={volume} style={getBackgroundSize(volume, 1)} max='1' min='0' step='0.01' onChange={handleVolume}/>
                </div>
            </div>
            <div className={classes.rightControllers}>
                <Subtitles/>
                <VideoSettings/>
                <Size/>
                <div onClick={handleFullScreen} className={classes.fullScreen}>
                    <FullScreen/>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
