import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import ProfileItem from './ProfileItem'
import * as icons from '../icons/icons'
import * as profileIcons from '../icons/profileIcons'
import { Link } from 'react-router-dom';
import classes from '../styles/sidebar.module.css'
import { MainMenuData, SubMenuData, SubscriptionsData, Settings } from '../SidebarData'
import { useLocation } from 'react-router-dom'


export default function Sidebar() {

  const location = useLocation();
  const locationPage = location.pathname.slice(1, 2).toUpperCase() + location.pathname.slice(2);
  const [active, setActive] = useState({})
  const [lastActive, setLastActive] = useState('none')

  useEffect(() => {
    MainMenuData.forEach(item => {
      setActive(prev => ({...prev,  [item.title]: 'none'}))
    })
    SubMenuData.forEach(item => {
      setActive(prev => ({...prev,  [item.title]: 'none'}))
    })
    setActive(prev => ({...prev, [locationPage]:'active'}));
    setLastActive(locationPage);
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
    <div className={classes.sidebar} > 
      <div className={classes.mainMenu}>
        {MainMenuData.map((item) => 
          <Link to={`/${item.title.toLowerCase()}`} key={item.title}><MenuItem icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/></Link>
        )}
      </div>
      <div className={classes.subMenu}>
        {SubMenuData.map((item) => 
          <Link to={`/${item.title.toLowerCase()}`} key={item.title}><MenuItem icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/></Link>
          )}
      </div>
      <div className={classes.subscriptions}>
        <h2 className={classes.h2Title}>Subscriptions</h2>
        {SubscriptionsData.map(item => 
          <div key={item.name}>
            <Link to={'/channel'}><ProfileItem key={item.title} icon={item.icon} title={item.name} changeStatus={() => false}/></Link>
          </div>
        )}
      </div>
      <div className={classes.settings}>
      <Link to={`/settings`}><MenuItem icon={Settings.icon} title={Settings.title} status={active[Settings.title]} changeStatus={() => setStatus(Settings.title)}/></Link>
      </div>
    </div>
  )
}
