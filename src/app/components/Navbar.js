import React from 'react'
import css from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={css.main}>
            <Link href={'#'}>SURASAK KAEWPHO</Link>
            <div>
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>Profile</Link>
                <Link href={'#'}>Portfolio</Link>
                <Link href={'#'}>Contact</Link>
                <Link href={'#'}>Web Board</Link>
            </div>
        </div>
    )
}

export default Navbar