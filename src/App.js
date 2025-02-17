import React,{useState} from 'react'
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ' '} >
      <div className='bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen'>
          <Navbar/>
          <Routes/>
          <Footer/>
      </div>
    </div>
  )
}

export default App