import './HomePage.css';
import Content from '../components/HomePageComponents/Content';
import Header from '../components/Header';
import useViewport from '../hooks/useViewport';
import MobileContent from '../components/HomePageComponents/MobileContent';

function HomePage() {
  const {isDesktop, isMobile, isTablet} = useViewport();
  return (
    <div className="HomePage">
      <Header isDesktop={isDesktop}/>
      <Content isDesktop={isDesktop}/>
    </div>
  );
}

export default HomePage;