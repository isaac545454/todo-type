import React from 'react'
import Style from "./header.module.css"



const Header = () => {
  return (
    <header className={Style.header}>
       <h1>React + TS todo</h1>
    </header>
  )
}

export default Header