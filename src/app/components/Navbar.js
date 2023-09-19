import React from 'react'
import css from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={css.main}>
            <Link href={'#home'}>SURASAK KAEWPHO</Link>
            <div>
                <Link href={'#home'}>Home</Link>
                <Link href={'#profile'}>Profile</Link>
                <Link href={'#portfolio'}>Portfolio</Link>
                <Link href={'#'}>Contact</Link>
                <Link href={'#'}>Web Board</Link>
            </div>
        </div>
    )
}

export default Navbar