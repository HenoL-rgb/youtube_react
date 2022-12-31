import React, { useState } from 'react'
import classes from '../styles/subscriptionItems.module.css'

export default function MenuItem({icon, title, status, changeStatus}) {
    
  function setActive() {
    changeStatus(title);
  }
  const rootClasses = [classes.container];
  if(status == 'active'){
    rootClasses.push(classes.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={setActive}>
      <div className={classes.icon}><img src={require(`D:/3kurs_labs/innowise/youtube_react/src/icons/${icon}`)}></img></div>
        {title}
    </div>
  )
}
