import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import AccountRoutes from './components/routes/AccountRoutes';
import MainRoutes from './components/routes/MainRoutes';
import { Routes } from 'react-router-dom';
import React from 'react';
export default function App() {
  return (
    <>
      <CustomHeader />
      <main className="main-content">
         <MainRoutes/>
      </main>
      <CustomFooter /> 
    </>
  );
}