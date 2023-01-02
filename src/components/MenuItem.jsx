import React, { useState } from 'react'
import classes from '../styles/menuItems.module.css'

export default function MenuItem({icon, title, status, changeStatus}) {
    
  function setActive() {
    changeStatus(title);
  }
  const rootClasses = [classes.container];
  if(status == 'active'){
    rootClasses.push(classes.active)
  }

  if(title == 'Settings'){
    rootClasses.push(classes.settings)
  }

  if(title == 'Home'){
    rootClasses.push(classes.home)
  }
  
  return (
    <div className={rootClasses.join(' ')} onClick={setActive}>
      <div className={classes.icon}>{icon}</div>
        {title}
    </div>
  )
}
