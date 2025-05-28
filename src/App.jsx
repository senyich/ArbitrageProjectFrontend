import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomFooter from './components/footer/CustomFooter';
import CustomHeader from './components/header/CustomHeader';
import MainPage from './pages/main/MainPage';
import AuthPage from './pages/authpage/AuthPage';
import React from 'react';

export default function App() {
  return (
    <>
      <CustomHeader />
      <main className="main-content">
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/account' element={<AuthPage/>} />
        </Routes>
      </main>
      <CustomFooter /> 
    </>
  );
}