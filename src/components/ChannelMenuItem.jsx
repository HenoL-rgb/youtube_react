import React, { useState } from 'react'
import classes from '../styles/channelMenuItem.module.css'

export default function MenuItem({title, status, changeStatus}) {

  function setActive() {  
    changeStatus(title);
  }
  const rootClasses = [classes.container];
  if(status == 'active'){
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={setActive}>
        {title}
    </div>
  )
}
