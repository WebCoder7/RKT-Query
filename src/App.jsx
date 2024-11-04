import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Single from './pages/Single'
import Login from './pages/Login'

function App() {
  const { pathname } = useLocation()

  return (
    <>
    <div className={`${pathname === "/" ? "hidden" : ""} p-5 flex w-[200px] space-x-5 mx-auto text-[22px] font-bold`}>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/add"}>Add</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/home/:id' element={<Single/>} />
    </Routes>
    </>
  )
}

export default App
