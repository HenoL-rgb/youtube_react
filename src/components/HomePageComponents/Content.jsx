import React from 'react'
import MainContent from '../MainContent'
import Sidebar from '../Sidebar'
import classes from '../../styles/content.module.css'
import MobileContent from '../MobileContent'

export default function Content({isDesktop}) {
  return (
    isDesktop ?
    <div className={classes.Content}>
        <Sidebar/>

        <MainContent/>
    </div>
    : 
    <div className={classes.Content}>
        <MobileContent/>
    </div>
  )
}
