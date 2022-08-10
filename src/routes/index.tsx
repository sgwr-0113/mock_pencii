import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from 'pages/Index/Index';
import { Login } from 'pages/Login/Login';
import { Detail } from 'pages/Detail/Detail';

const homeUrl = process.env.PUBLIC_URL;

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path={homeUrl} element={<Index />} />
      <Route path={homeUrl + '/login'} element={<Login />} />
      <Route path={homeUrl + '/detail'} element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
