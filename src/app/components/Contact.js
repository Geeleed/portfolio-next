import React from 'react'
import css0 from './Contact.module.css'
// import css from './Home.module.css'
import {Anim,XY,Sq,Sq2} from './Home'

function Contact() {
  return (
    <div className={css0.main}>
      <Anim key={'anim-contact'} numList={[20, 5]} elementList={[<Sq />, <Sq2 />]} />
        <form className={css0.form}>
            <h1>Contact</h1>
            <input type="text" placeholder='หัวข้อ'/>
            <textarea placeholder='ข้อความ' />
            <input type='submit' value='ส่งข้อความ'/>
        </form>
    </div>
  )
}

export default Contact


// function Anim({ numList, elementList }) {
//   let elems = []
//   for (let i = 0; i < elementList.length; i++) {
//       let element = elementList[i];
//       for (let j = 0; j < numList[i]; j++) {
//           elems = [...elems, element]
//       }
//   }
//   return (
//       <div className={css.anim__main}>
//           {elems}
//       </div>
//   )
// }
// const XY = (r, deg) => {
//   const angle = deg * Math.PI / 180
//   const x = Math.cos(angle) * r
//   const y = Math.sin(angle) * r
//   return [x, y]
// }
// function Sq() {
//   const [X, Y] = XY(1000, Math.random() * 360)
//   return (
//       <div className={css.sq} style={{
//           offset: `path('M0,0 L${parseInt(X)},${parseInt(Y)}') 0deg`,
//           animationDelay: `${Math.random() * 3}s`,
//           animationDuration: `${Math.random() * 2 + 1}s`
//       }}></div>
//   )
// }
// function Sq2() {
//   const [X, Y] = XY(1000, Math.random() * 360)
//   return (
//       <div className={css.sq2} style={{
//           offset: `path('M0,0 L${parseInt(X)},${parseInt(Y)}') 0deg`,
//           animationDelay: `${Math.random() * 3}s`,
//           animationDuration: `${Math.random() * 2 + 1}s`,
//           backgroundColor: `var(--tiny-color)`
//       }}></div>
//   )
// }