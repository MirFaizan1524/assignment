import Courses from '../src/components/courses/Courses.jsx';
import './App.css';
import Philosophy from '../src/components/philosophy/Philosophy.jsx';
import Events from '../src/components/events/Events.jsx';
import Testomonials from '../src/components/testomonials/Testomonials.jsx';
import Footer from '../src/components/footer/Footer.jsx';
import LandingPage from '../src/components/landing/LandingPage.jsx'
import Banner from '../src/components/banner/Banner.jsx'
import Navbar from '../src/components/navbar/Navbar.jsx'


function App() {
  return (
    <>
      <Navbar></Navbar>  
       <LandingPage></LandingPage> 
       <Banner></Banner>
      <Courses></Courses>
     <Philosophy></Philosophy>
    <Events></Events>
    <Testomonials></Testomonials>
    <Footer></Footer>
    
    </>    
  );
}

export default App;
