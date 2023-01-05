import './VideoPlayerPage.css';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import PlayerContent from '../components/PlayerContent';

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