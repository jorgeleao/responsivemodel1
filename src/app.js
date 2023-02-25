import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menubar from './menubar.js'
import Sinotico from './Sinotico'
import Graphics from './graphics'
import Events from './events'

function App() {

return (
    <div className="App">
        <BrowserRouter  basename={'/'}>
          <Menubar />
          <Routes>
            <Route exact path="/" element={<Sinotico />}></Route>
            <Route path="/grafico" element={<Graphics />}></Route>
            <Route path="/events" element={<Events />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
