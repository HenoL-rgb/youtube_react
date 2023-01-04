import './ChannelPage.css';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import ChannelContent from '../components/ChannelContent';
import ChannelHeaderMobile from '../components/ChannelHeaderMobile';

function ChannelPage() {
  const {isDesktop, isMobile, isTablet} = useViewport();

  
  return (
    isDesktop ?
    <div className="ChannelPage">
      <Header isDesktop={isDesktop}/>
      <ChannelContent isDesktop={isDesktop}/>
    </div>
    :
    <div className="ChannelPage">
      <ChannelHeaderMobile isDesktop={isDesktop}/>
      <ChannelContent isDesktop={isDesktop}/>
    </div>
  );
}

export default ChannelPage;