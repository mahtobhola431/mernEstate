import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App