import React, { useEffect, useState } from 'react'
import ChannelMenuItem from './ChannelMenuItem'
import ProfileItem from './ProfileItem'
import * as icons from '../icons/icons'
import * as profileIcons from '../icons/profileIcons'
import classes from '../styles/ChannelMenu.module.css'
import { ChannelMenuData } from '../SidebarData'

export default function ChannelMenu({isDesktop}) {

  const [active, setActive] = useState({})
  const [lastActive, setLastActive] = useState('none')

  useEffect(() => {
    ChannelMenuData.forEach(item => {
      setActive(prev => ({...prev,  [item.title]: 'none'}))
    })
    setActive(prev => ({...prev, ['Home']:'active'}));
    setLastActive('Home');
  }, [])

  function setStatus(title) {
    if(title == lastActive) return;
    const newStatus = active[title] == 'active' ? 'none' : 'active';

    if(newStatus == 'active') {
      setActive({...active, [lastActive]: 'none'});
      setLastActive(title);
    }

    setActive(prev => ({...prev, [title]: newStatus}))
  }

  return (
    <div className={classes.container} > 
          {
            isDesktop ?
            <div className={classes.mainMenu}>
            {ChannelMenuData.map((item) => 
              <ChannelMenuItem key={item.title} icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/>
              )}
            </div>
            : 
            <div className={classes.mainMenu}>
            {ChannelMenuData.map((item, index) => {
              if(index > 2) return;
                return <ChannelMenuItem key={item.title} icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/>
              })}
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.7624 0.798368L9.28113 0.263702C9.11428 0.0879298 8.91953 0 8.69714 0C8.47025 0 8.27771 0.0879298 8.11937 0.263702L5 3.72814L1.88063 0.263789C1.72229 0.0880173 1.52975 8.74923e-05 1.30294 8.74923e-05C1.08047 8.74923e-05 0.885722 0.0880173 0.718866 0.263789L0.243902 0.798455C0.0813008 0.978952 0 1.19523 0 1.44712C0 1.70374 0.0813796 1.91757 0.243902 2.08862L4.42231 6.72912C4.5764 6.90971 4.76886 7 5 7C5.22681 7 5.42147 6.90971 5.58399 6.72912L9.7624 2.08862C9.92075 1.91276 10 1.69893 10 1.44712C10 1.19996 9.92075 0.983764 9.7624 0.798368Z" fill="black"/>
              </svg>
            </div>
          }
        
        {
          isDesktop ?
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6986 16.3006L14.159 12.761L14.158 12.76C16.7188 9.46107 16.2738 4.7398 13.1417 1.97751C10.0096 -0.784774 5.26972 -0.636239 2.31674 2.31674C-0.636239 5.26972 -0.784775 10.0096 1.97751 13.1417C4.7398 16.2737 9.46108 16.7188 12.76 14.158L16.2996 17.6976C16.5477 17.9548 16.9152 18.0582 17.2609 17.9679C17.6067 17.8777 17.8768 17.6079 17.9676 17.2623C18.0583 16.9167 17.9555 16.549 17.6986 16.3006ZM13.1962 11C12.1244 12.8564 10.1436 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C10.1436 2 12.1244 3.14359 13.1962 5C14.2679 6.85641 14.2679 9.14359 13.1962 11Z" fill="black"/>
            </svg>
          : ''
        }
      
    </div>
  )
}
