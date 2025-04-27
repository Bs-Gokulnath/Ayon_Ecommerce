import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './auth/signup'
import LoginPage from './auth/signin'
import Home from './pages/Homepage'
import ProductDetails from './components/Product_card'
import UserProfile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<UserProfile />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
