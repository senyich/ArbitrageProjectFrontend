import { Route, Routes } from 'react-router-dom';
import React from 'react';
import AccountForm from '../AccountForm';

export default function AccountRoutes(){
    return (
        <Routes>
          <Route index element={<></>} />
          <Route path='/arbitrageform' element={<AccountForm/>} />
        </Routes>
    )
}