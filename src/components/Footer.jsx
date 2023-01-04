import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import classes from '../styles/footer.module.scss'
import { MainMenuData, SubMenuData } from '../SidebarData'
import { useLocation } from 'react-router-dom'

export default function Footer() {

  const location = useLocation();
  const locationPage = location.pathname.slice(1, 2).toUpperCase() + location.pathname.slice(2);
  const [active, setActive] = useState({})
  const [lastActive, setLastActive] = useState('none')

  useEffect(() => {
    MainMenuData.forEach(item => {
      setActive(prev => ({...prev,  [item.title]: 'none'}))
    })
    setActive(prev => ({...prev, [locationPage]:'active'}));
    setLastActive(locationPage);
  }, [location])

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
    <div className={classes.footer} > 
      <div className={classes.mainMenu}>
        {MainMenuData.map((item) => 
          <MenuItem key={item.title} icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/>
        )}
        {SubMenuData.map((item) => {
            if(item.title != 'Library') return;
          return <MenuItem key={item.title} icon={item.icon} title={item.title} status={active[item.title]} changeStatus={() => setStatus(item.title)}/>
        }
        )}
      </div>
    </div>
  )
}
