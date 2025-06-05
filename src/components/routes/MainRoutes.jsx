import AccountPage from '../../pages/AccountPage';
import MainPage from '../../pages/MainPage';
import AuthPage from '../../pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

export default function MainRoutes(){
    return(
        <Routes>
            <Route index element={<MainPage/>} />
            <Route path='/auth' element={<AuthPage/>} />
            <Route path='/account/*' element={<AccountPage/>} />
        </Routes>
    )
}