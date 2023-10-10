import React from 'react';
import './App.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundView from '../../views/NotFoundView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path='*' element={<NotFoundView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
