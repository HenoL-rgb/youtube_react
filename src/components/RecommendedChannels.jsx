import React from 'react'
import { RecommendedChannelsData } from '../RecommendedChannelsData'
import classes from '../styles/RecommendedChannels.module.css'

export default function RecommendedChannels() {
  return (
    <div className={classes.container}>
        <span className={classes.title}>Recommended channel</span>
        {RecommendedChannelsData.map(item => 
            <div className={classes.recommendedChannel} key={item.id}>
                <img src={require(`../icons/${item.icon}`)}/>
                <h2>{item.name}</h2>
            </div>    
        )}
    </div>
  )
}
