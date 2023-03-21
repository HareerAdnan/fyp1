import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Scholorships from './components/pages/Scholorships';
import Entrytest from './components/pages/Entrytest';
import SignUp from './components/pages/SignUp'

function App() {
  return (
   <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/scholorships' element={<Scholorships/>} />
    <Route path='/entrytest' element={<Entrytest/>} />
    <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
