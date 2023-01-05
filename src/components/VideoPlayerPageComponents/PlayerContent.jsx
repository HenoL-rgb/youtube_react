import React from 'react'
import classes from '../../styles/playerContent.module.scss'
import MainPlayerContent from './MainPlayerContent'
import MobilePlayerContent from './MobilePlayerContent'

export default function PlayerContent({isDesktop}) {
  return (
    isDesktop ?
    <div className={classes.Content}>
        <MainPlayerContent/>
    </div>
    : 
    <div className={classes.Content}>
        <MobilePlayerContent/>
    </div>
  )
}
