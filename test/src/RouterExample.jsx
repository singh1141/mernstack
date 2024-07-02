import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'

export default function RouterExample() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>}>  </Route>
        <Route path="/Contact" element={<div>Contact</div>}>  </Route>
        <Route path='/About' element={<div>About</div>}>  </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
