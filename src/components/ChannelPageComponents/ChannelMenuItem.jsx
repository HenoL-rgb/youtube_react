import React from 'react'
import classes from '../../styles/channelMenuItem.module.scss'

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
