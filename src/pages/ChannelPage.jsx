import './HomePage.css';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import MobileContent from '../components/MobileContent';
import ChannelContent from '../components/ChannelContent';

function ChannelPage() {
  const {isDesktop, isMobile, isTablet} = useViewport();
  return (
    <div className="HomePage">
      <Header isDesktop={isDesktop}/>
      <ChannelContent isDesktop={isDesktop}/>
    </div>
  );
}

export default ChannelPage;