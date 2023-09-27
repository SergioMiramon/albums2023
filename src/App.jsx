import './App.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'
import logo from "../public/icons/images/all/logo.png"

const App = () => {
  
  return (
    <>
      <Header headerImg={logo} headerAlt="logo"/>
      <Main/>
    </>
  )
}

export default App