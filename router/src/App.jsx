import React from 'react'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Component/Home'
import { Contact } from './Component/Contact'
import { About } from './Component/About'
import { PageNotFound } from './Component/PageNotFound'
export default function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
