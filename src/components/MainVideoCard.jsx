import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../styles/mainVideoCard.module.scss'

export default function MainVideoCard({item}) {
  return (
    <div className={classes.container}>
        <div className={classes.videoContainer}>
            <img src={require(`../images/${item.image}`)}></img>
            <div className={classes.time}>{item.time}</div>
        </div>
        <div className={classes.text}>
            <h2 className={classes.title}>{item.title}</h2>
            <div className={classes.description}>
                <span>{item.description}</span>
            </div>
            <div className={classes.info}>
                <span>{item.views} views&nbsp;&nbsp;·&nbsp;&nbsp;{item.date}</span>     
            </div>
        </div>
    </div>
  )
}
