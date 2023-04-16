import React from 'react'
import Header from './components/common/header/Header'
import "./App.css";
import { BrowserRouter as Router, /* Switch, Route  */} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
    <Header />
      
      {/* <Route path='/' component={Homepages} /> */}
      
    </Router>
    
    </>
  )
}

export default App
