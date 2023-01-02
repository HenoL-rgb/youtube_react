import React from 'react';
import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';
import {publicRoutes} from './routes/router'

export default function AppRouter() {
  return (
    <Routes>
        {publicRoutes.map((route) =>
            <Route key={route.path} element={route.component} path={route.path} exact={route.exact}></Route>
        )}
        <Route path="*" element={<Navigate to="/home"/>}></Route>
    </Routes>
  )
}
