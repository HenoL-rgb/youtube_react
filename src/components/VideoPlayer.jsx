import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import VideoControls from "./VideoControls";
import VideoControlsMobile from "./VideoControlsMobile";
import classes from '../styles/videoPlayer.module.scss';
import screenfull from "screenfull"


export default function VideoPlayer({source = 'video.mp4', isDesktop = true}) {

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState({duration: 0, playedSeconds: 0});
  const [visibility, setVisibility] = useState(false);

  function handlePlay(e) {  
    setPlaying(!playing);
  }

  function handlePlayContainer() {
    if(!isDesktop){
      setVisibility(!visibility);
      return;
    }
    setPlaying(!playing);

  }

  function handleVolume(e) {
    setVolume(e.target.value)
  }

  function handleProgress(e) {
    setTime({...time, playedSeconds: e.playedSeconds});
  }

  function handleProgressController(e) {
    refPlayer.current.seekTo(Number(e), 'seconds')
  }

  function handleDuration(e) {
    setTime({...time, duration: e})
  }

  function handleFullScreen(e) {
    screenfull.toggle(refPlayerContainer.current)
  }

  const refPlayer = useRef();
  const refPlayerContainer = useRef();

  return (
    <div className={classes.container} ref={refPlayerContainer} >
        <div className={classes.videoContainer} onClick={handlePlayContainer}>
          <ReactPlayer
              url={require(`../video/${source}`)}
              playing={playing}
              controls={false}
              width='100%'
              height='100%'
              volume={+volume}
              ref={refPlayer}
              progressInterval={50}
              onDuration={handleDuration}
              onProgress={handleProgress}            
          />
        </div>
        
        <div className={classes.controls}>
          {
            isDesktop ?
            <VideoControls 
            playing={playing} 
            volume={+volume} 
            duration={time.duration}
            playedSeconds={time.playedSeconds}
            handleProgress={handleProgressController}
            handlePlay={handlePlay} 
            handleVolume={handleVolume}
            handleFullScreen={handleFullScreen}
            />
            :
            <VideoControlsMobile 
            playing={playing} 
            volume={+volume} 
            duration={time.duration}
            playedSeconds={time.playedSeconds}
            visibility={visibility}
            handleProgress={handleProgressController}
            handlePlay={handlePlay} 
            handleVolume={handleVolume}
            handleFullScreen={handleFullScreen}
            />
          }
          
        </div>
    </div>
  )
}
