import React from 'react';
import channelIcon from '../icons/channelPic.jpg';
import classes from '../styles/ChannelTitle.module.scss';
import channelBg from '../images/channelBg.jpg'

export default function ChannelTitle() {
  return (
    <div className={classes.container}>
        <img src={channelBg} className={classes.channelBg}/>
        <div className={classes.person}>
            <img src={channelIcon}/>
            <div className={classes.text}>
                <h2>Margaret Phelps</h2>
                <span>245K subscribed</span>
            </div>
        </div>
        <div className={classes.controls}>
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM10 22C10 22.5532 10.4472 23 11 23C11.5489 23 11.9983 22.5515 12 22H10ZM17.1786 11.3505V16.9263C17.1786 17.246 17.4468 17.5712 17.7705 17.6507L18.0889 17.7289C18.6202 17.8594 19 18.3188 19 18.8462C19 19.484 18.4568 20 17.7831 20H3.21687C2.54568 20 2 19.4816 2 18.8462C2 18.3165 2.37826 17.8589 2.90987 17.7289L3.23897 17.6484C3.56065 17.5697 3.82143 17.249 3.82143 16.9262V11.3445C3.82143 7.84026 6.81086 5 10.5 5C14.1906 5 17.1786 7.83931 17.1786 11.3505Z" fill="black"/>
            </svg>
            <button className={classes.subscribe}>Subscribe 2.3m</button>
        </div>
    </div>
  )
}
