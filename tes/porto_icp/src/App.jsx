import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navigation/Navbar"
import Homepage from "./Homepage/Homepage"
import Layanan from "./Layanan/Layanan"
import Produk from "./Produk/Produk"
import Tentang from "./Tentang/Tentang"
import Karir from "./Karir/Karir"

import CookieConsent from "./components/CookieConsent"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/karir" element={<Karir />} />
      </Routes>
      <CookieConsent />
    </Router>
  )
}

export default App
