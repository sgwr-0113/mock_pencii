import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from 'pages/Index/Index';
import { Login } from 'pages/Login/Login';
import { Detail } from 'pages/Detail/Detail';

export const Routing = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path={'/'} element={<Index />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/detail'} element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
