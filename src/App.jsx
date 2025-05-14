import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomFooter from './components/footer/CustomFooter'
import CustomHeader from './components/header/CustomHeader'
import About from './components/routs/About/About'
import Account from './components/routs/Account/Account'
import Home from './components/routs/Home/Home'

function App() {
  return (
    <>
      <CustomHeader />
        <main className="main-content">
         <Routes>
            <Route index element={
              <>
              <Home />
              <About/>
              </>
              } />
            <Route path="account" element={<Account />} />
          </Routes>
        </main>
      <CustomFooter />
    </>
  )
}

export default App
