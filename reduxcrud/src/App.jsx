import React from 'react'
import Read from './Component/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Component/Create'
import Navbar from './Component/Navbar'
import Update from './Component/Update'

function App() {
  return (
    <BrowserRouter>
    <div>

      <Navbar />
            <h1 className='bg-success '>hello this Crud in Redux</h1>
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/new' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App