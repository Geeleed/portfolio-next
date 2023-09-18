import React from 'react'
import css from './Contact.module.css'

function Contact() {
  return (
    <div className={css.main}>
        <form className={css.form}>
            <h1>Contact</h1>
            <input type="text" placeholder='หัวข้อ'/>
            <textarea placeholder='ข้อความ' />
            <input type='submit' value='ส่งข้อความ'/>
        </form>
    </div>
  )
}

export default Contact