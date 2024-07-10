
import './App.css'

import Clients from './Components/Clients';
import Footer from './Components/Footer';
import Free from './Components/Free';
import Home from './Components/Home';
import Liks from './Components/Liks';
import Navbar from './Components/Navbar';
import Release from './Components/Release';
import ScrollToTop from './Components/ScrollToTop'
import Signup from './Components/Signup';
import SuperRare from './Components/SuperRare';

import AOS from "aos";
import "aos/dist/aos.css";

import "./scss/index.scss";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Liks />
      <Signup />
      <Footer />
    </div>
  );
}

export default App
