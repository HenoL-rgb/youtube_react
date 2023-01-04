import './VideoPlayerPage.css';
import Content from '../components/Content';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import MobileContent from '../components/MobileContent';
import VideoPlayer from '../components/VideoPlayer';
import PlayerContent from '../components/PlayerContent';

function VideoPlayerPage() {
  const {isDesktop, isMobile, isTablet} = useViewport();
  return (
    <div className="VideoPlayerPage">
      <Header isDesktop={isDesktop}/>
      <PlayerContent isDesktop={isDesktop}/>
    </div>
  );
}

export default VideoPlayerPage;