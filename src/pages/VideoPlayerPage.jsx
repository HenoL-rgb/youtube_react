import './VideoPlayerPage.css';
import Content from '../components/Content';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import MobileContent from '../components/MobileContent';
import VideoPlayer from '../components/VideoPlayer';
import PlayerContent from '../components/PlayerContent';
import MobilePlayerContent from '../components/MobilePlayerContent';
import ChannelHeaderMobile from '../components/ChannelHeaderMobile';

function VideoPlayerPage() {
  const {isDesktop, isMobile, isTablet} = useViewport();
  return (
    <div className="VideoPlayerPage">
      <Header isDesktop={isDesktop} page={'player'}/>
      <PlayerContent isDesktop={isDesktop}/>
    </div>
  );
}

export default VideoPlayerPage;