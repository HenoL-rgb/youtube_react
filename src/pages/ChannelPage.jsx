import './ChannelPage.css';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import MobileContent from '../components/MobileContent';
import ChannelContent from '../components/ChannelContent';
import ChannelHeaderMobile from '../components/ChannelHeaderMobile';
import ChannelMobileContent from '../components/ChannelMobileContent';
import { useEffect, useState } from 'react';

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