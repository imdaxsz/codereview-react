import React from 'react';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from '@pages/Wishlist';
import Booking from '@pages/Booking';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
