import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/loginPopUp/LoginPopUp'

const App = () => {
  let [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <div className='flex justify-center'>
        <div className='w-[80%]'>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Placeorder />} />

          </Routes>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App
