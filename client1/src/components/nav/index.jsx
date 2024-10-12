import React from 'react'
import "./style.scss"
const Nav = ({logo,btnText}) => {
  return (
    <header>
        <h1>
        {logo}
        </h1>
        <nav>
            <a href="#">Link</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <button>{btnText}</button>
    </header>
  )
}

export default Nav
