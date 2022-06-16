
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PiesakiSapni from './PiesakiSapni';
import Uznemejiem from './Uznemejiem';
import SapnuBanka from './SapnuBanka';
import SapnusAtbalsta from './SapnusAtbalsta';
import IedvesmasStasti from './IedvesmasStasti';
import Ideja from './Ideja';
import Footer from './Footer';
import ErrorPage from './Error';
import { useEffect, useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
    <Nav/>
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/ideja" element={<Ideja/>} />
        <Route path="/piesaki-sapni"  element={<PiesakiSapni/>} />
        <Route path="/uznemejiem"  element={<Uznemejiem/>} />
        <Route path="/sapnu-banka"  element={<SapnuBanka/>} />
        <Route path="/sapnus-atbalsta"  element={<SapnusAtbalsta/>} />
        <Route path="/99-idevesmas-stasti"  element={<IedvesmasStasti/>} />
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
    {showButton ? (
      <button onClick={scrollToTop} className="back-to-top">
        &#8593;
      </button>
    ) : ''}
    <div className='footer'>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
