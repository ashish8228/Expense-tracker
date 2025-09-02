import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/auth/login'
import SignUp from './pages/auth/signUp'
import Home from './pages/Dashboard/Home'
import Expense from './pages/Dashboard/Expense'
import Income from './pages/Dashboard/Income'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/dashboard' exact element={<Home />} />
          <Route path='/expense' exact element={<Expense />} />
          <Route path='/income' exact element={<Income />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


const Root = () => {
  //check if token exists in localstorage
  // !! (Double bang) it is strict converts any value into a strict boolean
  const isAuthanticated = !!localStorage.getItem("token")

  // redirect to dashboard if authenticated , otherwise go to login 
  return isAuthanticated ? (
    <Navigate to={'/dashboard'} />
  ) : (<Navigate to={'login'} />
  )
}