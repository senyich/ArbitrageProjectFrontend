import { Route, Routes } from 'react-router-dom';
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import AccountPage from './pages/AccountPage'
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import React from 'react';

export default function App() {
  return (
    <>
      <CustomHeader />
      <main className="main-content">
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/auth' element={<AuthPage/>} />
          <Route path='/account' element={<AccountPage/>} />
        </Routes>
      </main>
      <CustomFooter /> 
    </>
  );
}