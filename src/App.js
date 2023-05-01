import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import Identify from './components/Identify';
import Demo from './components/Demo';
import Platform from './components/Platform';
import Deal from './components/Deal';
import UsersReview from './components/UsersReview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowStarted from './components/HowStarted';
import DemoSlider from './components/DemoSlider';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import PreLoader from './components/PreLoader';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, [])
  return (
    <div>
      <PreLoader />
      <BackToTop />
      <div className='overflow-hidden'>
        <div className='d-flex flex-column vh_100_xl'>
          <MyNav />
          <MyHeader />
        </div>
        <Identify />
        <Demo />
        <Platform />
        <DemoSlider />
        <Deal />
        <HowStarted />
        <UsersReview />
        <Footer />
      </div>
    </div>
  );
}

export default App;
