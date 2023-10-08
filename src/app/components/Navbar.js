import React from 'react'
import css from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={css.main}>
            <Link href={'https://github.com/Geeleed/portfolio-next'} target='_blank'>SURASAK KAEWPHO</Link>
            <div>
                <Link href={'#home'}>Home</Link>
                <Link href={'#profile'}>Profile</Link>
                <Link href={'#portfolio'}>Portfolio</Link>
                <Link href={'#contact'}>Contact</Link>
                <Link href={'#webboard'}>Web Board</Link>
            </div>
        </div>
    )
}

export default Navbar