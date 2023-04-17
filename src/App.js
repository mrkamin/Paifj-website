import React from 'react'
import Header from './components/common/header/Header'
import "./App.css";
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from "./components/home/Homepages";
import GetInformed from "./components/culture/GetInformed"
import SinglePage from './components/singlePage/SinglePage';

const App = () => {
  return (
    <>
    <Router>
    <Header />
      <Routes>
      <Route index element={<Homepages />} />
      <Route path="getinformed" element={<GetInformed />} /> 
      <Route path="singlepage/:id" element={<SinglePage />} /> 
      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App
