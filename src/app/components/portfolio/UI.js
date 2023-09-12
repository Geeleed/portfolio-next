import UICard from '@/app/reuses/UICard'
import React from 'react'
import css from './style.module.css'

function UI() {
  return (
    <div style={{padding:'0 10%'}}>
      UI
      <div className={css.UIBox}>
        <UICard iframe='elements/button/btn2.html' />
        <UICard iframe='elements/button/btn3.html' />
        <UICard iframe='elements/button/btn5.html' />
        <UICard iframe='elements/loader/loader1.html' />
        <UICard iframe='elements/loader/loader2.html' />
        <UICard iframe='elements/loader/loader3.html' />
        <UICard iframe='' />
        <UICard iframe='' />
        <UICard iframe='' />
        <UICard iframe='' />
        <UICard iframe='' />
        <UICard iframe='' />
      </div>
    </div>
  )
}

export default UI