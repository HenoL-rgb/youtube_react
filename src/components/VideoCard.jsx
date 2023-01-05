import React from 'react'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import classes from '../styles/videoCard.module.scss'

export default function VideoCard({item, width}) {
    const rootClasses = [classes.container];
    rootClasses.push(classes[width]);
    const navigate = useNavigate();

    function redirectTo(target) {
        if(target.id == 'author'){
            navigate('/channel');
            return;
        }
        navigate('/video');
    }
  return (
    <div className={rootClasses.join(' ')}  onClick={(e) => redirectTo(e.target)}>
        <div className={classes.videoContainer}>
            <img src={require(`../images/${item.image}`)}></img>
            <div className={classes.time}>{item.time}</div>
        </div>
        <div className={classes.text}>
            <h2 className={classes.title}>{item.title}</h2>
            {width === 'large' ? 
                <div className={classes.infoSmall}>
                    <span>{item.views} views&nbsp;&nbsp;·&nbsp;&nbsp;{item.date}</span>     
                    <span id='author'>{item.author}</span>
                </div>
            : width === 'next' ?
                <div className={classes.info}>
                    <span>{item.views} views</span>     
                    <span id='author'>{item.author}</span>
                </div>
            :   <div className={classes.info}>
                    <span>{item.views} views&nbsp;&nbsp;·&nbsp;&nbsp;{item.date}</span>     
                    <span id='author'>{item.author}</span>
                </div>
            }
            
        </div>
    </div>
  )
}
