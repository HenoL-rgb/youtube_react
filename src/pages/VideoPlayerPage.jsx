import './VideoPlayerPage.css';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import PlayerContent from '../components/VideoPlayerPageComponents/PlayerContent';

function VideoPlayerPage() {
  const {isDesktop} = useViewport();
  return (
    <div className="VideoPlayerPage">
      <Header isDesktop={isDesktop} page={'player'}/>
      <PlayerContent isDesktop={isDesktop}/>
    </div>
  );
}

export default VideoPlayerPage;