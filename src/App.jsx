import './App.css'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </>
  )
}

export default App
