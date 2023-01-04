import React, { useState } from 'react'
import classes from '../styles/subscriptionItems.module.scss'

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
      <div className={classes.icon}><img src={require(`../icons/${icon}`)}></img></div>
        {title}
    </div>
  )
}
