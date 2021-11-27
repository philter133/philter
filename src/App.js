import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Homepage from './Pages/Homepage';
import FilterPage from './Pages/FilterPage';
import AdapterPage from './Pages/AdapterPage';
import GalleryPage from './Pages/GalleryPage';
import DevPage from './Pages/DevPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <div className='rectangle'></div>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/filter' element={<FilterPage/>} />
          <Route path='/adapter' element={<AdapterPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/about' element={<DevPage/>} />
        </Routes>
      </div>
    </Router>
  );
}





export default App;
