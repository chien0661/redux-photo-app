import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="photos" replace />} />
            <Route path='/photos/*' element={<Photo />} />
          </Routes>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
