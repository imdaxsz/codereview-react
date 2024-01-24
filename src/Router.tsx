import React from 'react';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from '@pages/Wishlist';
import Booking from '@pages/Booking';
import Layout from '@components/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
