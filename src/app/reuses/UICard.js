import React from 'react'
import css from './style.module.css'

function UICard(props) {
    const {iframe} = props
  return (
    <div className={css.container}>
        <div className={css.UIBox}>
            <iframe src={iframe}></iframe>
        </div>
    </div>
  )
}

export default UICard