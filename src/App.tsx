import './App.css'

import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Questions from './pages/Questions'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/questions' element={<Questions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
