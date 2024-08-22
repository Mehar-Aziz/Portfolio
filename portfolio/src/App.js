import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
         {/* <Route path="/" Component={<About />} />*/}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
