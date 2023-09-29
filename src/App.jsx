import './App.css'
import { Header } from './components/Header/Header'
import logo from "../public/icons/images/all/logo.png"
import { Outlet } from 'react-router-dom'

const App = () => {
  
  return (
    <>
      <Header headerImg={logo} headerAlt="logo"/>
      <Outlet></Outlet>
    </>
  )
}

export default App