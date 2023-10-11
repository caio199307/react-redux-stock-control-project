import React from 'react';
import './App.css';
import ProductsView from '../../views/ProductsView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/products'} />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path='*' element={<NotFoundView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
