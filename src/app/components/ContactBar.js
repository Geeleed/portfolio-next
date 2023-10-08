import React from 'react'
import css from './ContactBar.module.css'
import Link from 'next/link'

function ContactBar() {
  return (
    <div className={css.main}>
        <Link href={'https://www.facebook.com/surasak.kaewpho/'} target='_blank'>
            <div></div>
            <h1>Facebook</h1>
        </Link>
        <Link href={'https://www.instagram.com/self.__ball/'} target='_blank'>
            <div></div>
            <h1>Instagram</h1>
        </Link>
        <Link href={'https://github.com/Geeleed'} target='_blank'>
            <div></div>
            <h1>GitHub</h1>
        </Link>
    </div>
  )
}

export default ContactBar