import React from 'react'
import classes from '../styles/videoCard.module.css'

export default function VideoCard({item, width}) {
    const rootClasses = [classes.container];
    rootClasses.push(classes[width]);
  return (
    <div className={rootClasses.join(' ')}>
        <div className={classes.videoContainer}>
            <img src={require(`../images/${item.image}`)}></img>
            <div className={classes.time}>{item.time}</div>
        </div>
        <div className={classes.text}>
            <h2 className={classes.title}>{item.title}</h2>
            {width === 'large' ? 
                <div className={classes.infoSmall}>
                    <span>{item.views} views&nbsp;&nbsp;·&nbsp;&nbsp;{item.date}</span>     
                    <span>{item.author}</span>
                </div>
            :
                <div className={classes.info}>
                    <span>{item.views} views&nbsp;&nbsp;·&nbsp;&nbsp;{item.date}</span>     
                    <span>{item.author}</span>
                </div>
            }
            
        </div>
    </div>
  )
}