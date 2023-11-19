import React from 'react'
import Cards from './Cards'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Categories from './Categories'

function App() {
  return (
    <>
      <Router>
      <Cards/>
        <Routes>
          <Route path='/Categories' element={<Categories/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App