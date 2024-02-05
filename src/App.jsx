import React from 'react'
import Header from './components/pages/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Category from './components/pages/Category';

function App() {
  return (
   
    <>
    
     
     <Router>
      <Routes>
      <Route path="/" exact element={<Header />} />

        <Route path="/category" element={<Category />} />
      </Routes>
     </Router>
    
     </>
  )
}

export default App