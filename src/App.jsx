// src/App.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer' // ต้องนำเข้า Footer component ที่คุณสร้างไว้
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import CardDetail from './pages/CardDetail'


const App = () => {
  return (
    <>
      <Router>
        {/* 1. กำหนดให้ div หลักเป็น flex container และมีความสูงอย่างน้อยเท่าหน้าจอ */}
        <div className='flex flex-col min-h-screen'>
          <Header />

          {/* 2. div นี้จะขยายขนาดออกไปเพื่อดัน Footer ลงด้านล่าง */}
          <div className="flex-grow">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Collection' element={<Collection />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/card_detail/:id' element={<CardDetail/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          {/* 3. Footer จะอยู่ชิดล่างเสมอ */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App