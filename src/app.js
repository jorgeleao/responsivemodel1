import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menubar from './menubar.js'
import Home from './home'

function App() {

return (
    <div className="App">

        <BrowserRouter  basename={'/'}>
          <Menubar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
