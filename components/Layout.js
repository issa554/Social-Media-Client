import {useState } from 'react'
import Navbar from "./header"
import Sidebar from "./sidebar"
const Layout = ({ children }) => {
  const [isOpen , setIsOpen] =useState(false)
  const togglebtn = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar togglebtn={togglebtn} />
     <Sidebar isOpen={isOpen} togglebtn={togglebtn} />
      {children}
    </>
  )
}

export default Layout
