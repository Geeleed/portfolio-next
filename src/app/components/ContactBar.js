import React from 'react'
import css from './ContactBar.module.css'
import Link from 'next/link'

function ContactBar() {
  return (
    <div className={css.main}>
        <Link href={'#'}>
            <div></div>
            <h1>FACEBOOK</h1>
        </Link>
        <Link href={'#'}>
            <div></div>
            <h1>INSTAGRAM</h1>
        </Link>
        <Link href={'#'}>
            <div></div>
            <h1>GITHUB</h1>
        </Link>
    </div>
  )
}

export default ContactBar