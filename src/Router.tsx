import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@components/Layout';
const Booking = lazy(() => import('@pages/Booking'));
const Wishlist = lazy(() => import('@pages/Wishlist'));

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
