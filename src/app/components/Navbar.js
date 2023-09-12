import React from 'react'
import css from './style.module.css'

function Navbar() {
  return (
    <div>
      <nav className={css.nav}>
        <div>GEELEED</div>
        <div>
          <a href='#home'>Home</a>
          <a href='#profile'>Profile</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
          <a href='#web__board'>Web Board</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar