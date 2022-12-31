import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import classes from '../styles/content.module.css'

export default function Content() {
  return (
    <div className={classes.Content}>
        <Sidebar/>
        <MainContent/>
    </div>
  )
}
