import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>

        </Routes>
    </div>
    </Router>
  );
}

export default App;
