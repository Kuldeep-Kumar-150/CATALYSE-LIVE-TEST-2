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


function App() {
  return (
    <div>
      <div className='overflow-hidden'>
        {/* <MyNav />
        <MyHeader />
        <Identify />
        <Demo />
        <Platform />
        <Deal />
        <HowStarted /> */}
        <DemoSlider/>
        {/* <UsersReview /> */}
      </div>
    </div>
  );
}

export default App;
