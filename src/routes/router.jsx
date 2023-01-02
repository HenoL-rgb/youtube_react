import HomePage from '../pages/HomePage'
import ChannelPage from '../pages/ChannelPage'

export const publicRoutes = [
      {path: '/home', component: <HomePage/>, exact: true},
      {path: '/channel', component: <ChannelPage/>, exact: true},
      {path: '/trending', component: <HomePage/>, exact: true},
      {path: '/Library', component: <HomePage/>, exact: true},
]