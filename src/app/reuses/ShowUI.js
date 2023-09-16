import Link from 'next/link'
import React from 'react'
import css from './ShowUI.module.css'

function ShowUI({ iframe, title, detail, source }) {
    return (
        <div className={css.main}>
            <div className={css.ui}>{iframe}</div>
            <div className={css.text}>
                <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                </div>
                <Link href={source} target='_blank'>Source Code</Link>
            </div>
        </div>
    )
}

export default ShowUI