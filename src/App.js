import React from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/video/:id' element={<Video />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
