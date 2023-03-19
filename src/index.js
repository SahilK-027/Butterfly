import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.png'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    ===================================================================================
                          Header
    ===================================================================================
   */}
    <header>
      <img src={logo} alt="logo" />
    </header>

    {/* 
    ===================================================================================
                          Canvas
    ===================================================================================
   */}
    <Suspense fallback={<Loader />}>
      <Canvas>
        <App />
      </Canvas>
    </Suspense>
    <Loader />
  </React.StrictMode>
);

