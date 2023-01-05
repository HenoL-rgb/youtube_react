import React from 'react';
import classes from '../../styles/PlayerNextVideosPlaylist.module.scss'
import VideoCard from '../VideoCard';

export default function PlayerNextVideosPlaylist({videos, width}) {
  return (
    <div className={classes.container}>
        <ul className={classes.videos}>
            {videos.map(item => <li key={item.id}><VideoCard item={item} width={width}></VideoCard></li>)}
        </ul>
    </div>
  )
}
