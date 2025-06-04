import React from 'react'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Newarrivals from './pages/Newarrivals'
import Dropshipper from './pages/dropshipper/Dropshipper'
import Wholeseller from './pages/wholeSeller/Wholeseller'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:categoryID' element={<Newarrivals />} />
        <Route path='/dropshipper' element={<Dropshipper />} />
        <Route path='/wholeseller' element={<Wholeseller />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
