import HomePage from '../pages/HomePage'
import ChannelPage from '../pages/ChannelPage'
import VideoPlayerPage from '../pages/VideoPlayerPage'

export const publicRoutes = [
      {path: '/home', component: <HomePage/>, exact: true},
      {path: '/channel', component: <ChannelPage/>, exact: true},
      {path: '/video', component: <VideoPlayerPage/>, exact: true},
      {path: '/trending', component: <HomePage/>, exact: true},
      {path: '/Library', component: <HomePage/>, exact: true},
]