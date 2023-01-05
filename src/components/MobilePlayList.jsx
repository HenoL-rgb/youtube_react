import React from 'react';
import classes from '../styles/MobilePlayList.module.scss'
import VideoCard from './VideoCard';

export default function MobilePlayList({videos}) {
    const width = 'channel'
  return (
    <div className={classes.container}>
        <ul className={classes.videos}>
            {videos.map(item => <li key={item.id}><VideoCard item={item} width={width}></VideoCard></li>)}
        </ul>
    </div>
  )
}
