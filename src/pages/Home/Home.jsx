// import Prueba from '../Prueba/Prueba';
import './Home.scss';
import Nav from '../../components/nav/Nav';
import FrontCover from '../../components/frontCover/FrontCover';
import VerticalSlider from '../../components/verticalSlider/VerticalSlider';
import Footer from '../../components/footer/Footer';
// import Watch from '../Watch/Watch';
// import Login from '../Login/Login';
// import Register from '../Register/Register'; 
import { DataProvider } from '../../context/DataContext';

const Home = () => {

  
  return (
    <div className='home'>
        <DataProvider>
          <Nav />
          <FrontCover />
          <VerticalSlider genreName='Action'/>
          <VerticalSlider genreName='History'/>
          <VerticalSlider genreName='Animation'/>
          <Footer />
        </DataProvider>
    </div>
  )
}

export default Home
