import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './containers/About';
import Contacts from './containers/Contacts';
import Price from './containers/Price';
import Pros from './containers/Pros';
import Reviews from './containers/Reviews';
import Service from './containers/Service';
import Top from './containers/Top';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <About />
      <Service />
      <Price />
      {/* <Pros /> */}
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
