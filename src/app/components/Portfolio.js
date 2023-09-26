import React, { useState } from 'react'
import css from './Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Snack from './miniApps/Snack'
import RateExchange from './miniApps/RateExchange'
import Glassmorphism from './miniApps/Glassmorphism'
import Neomorphism from './miniApps/Neomorphism'

function Portfolio() {
    const [popup, setPopup] = useState(null)
    return (
        <div id='portfolio' className={css.main}>
            <section className={css.miniProject}>
                <h1>HTML CSS JavaScript</h1>
                <CardWeb title={'Restaurant Landing Page'} detail={'Landing page แรกที่ deploy สำเร็จ ใช้ HTML CSS JS ทำ 12 ชั่วโมง แบ่งทำ 2 วัน เสียเวลาไปกับการออกแบบนานมาก ตอนเริ่มคือนึกภาพไม่ค่อยออกว่าจะวางโครงร่างยังไงเลยลองหา ref จากในเน็ตมารวม ๆ กัน'} img__src={'/images/landing_page/lp1.jpg'} url={'https://lp-1-nu.vercel.app/'} />
                <CardWeb title={'Cleaning Service'} detail={'ลองทำ landing page ด้วย HTML CSS JS ซึ่งใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน ได้เรียนรู้อย่างนึง คือ เวลาส่วนใหญ่เสียไปกับการหารูปมาแปะ'} img__src={'/images/landing_page/lp2.jpg'} url={'https://lp-2-two.vercel.app/'} />
                <CardWeb title={'Simple Design'} detail={'ลองออกแบบเว็บ portfolio ง่าย ๆ ด้วย HTML CSS JS ใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน ภาพที่ใช้เป็นภาพที่ถ่ายเองที่บ้าน น้อนน่ารักกก'} img__src={'/images/landing_page/lp4.jpg'} url={'https://lp-4-alpha.vercel.app/'} />
                <CardWeb title={'Parallax'} detail={'ลองทำ parallax website ด้วย HTML CSS JS ใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน อันที่จริงเคยเห็นการทำ parallax โดยใช้แค่ HTML กับ CSS ไม่ต้องใช้ JS อยู่'} img__src={'/images/landing_page/lp5.jpg'} url={'https://lp-5.vercel.app/'} />
                {/* <h1>Portfolio</h1> */}
                {/* <div className={css.pad}>
                    <Card title={'Glassmorphism'} />
                    <Card title={'Neomorphism'} />
                    <Card title={'Photo Editor'} />
                    <Card title={'Rate Exchange'} />
                    <Card title={'Best Buy'} />
                    <Card title={'Text Locker'} />
                    <Card title={'File Locker'} />
                    <Card title={'Weather Now'} />
                </div> */}
            </section>
            <section className={css.miniProject}>
                <h1>Mini Apps</h1>
                <CardApp title={'Glassmorphism'} imageSrc={'/images/miniApps/glassmorphism.png'} setPopup={setPopup} componentData={<Glassmorphism />} />
                <CardApp title={'Neomorphism'} imageSrc={'/images/miniApps/neomorphism.png'} setPopup={setPopup} componentData={<Neomorphism />} />
                <CardApp title={'Photo Editor'} />
                <CardApp title={'Rate Exchange'} imageSrc={'/images/miniApps/rateExchange.png'} setPopup={setPopup} componentData={<RateExchange />} />
                <CardApp title={'Snack'} imageSrc={'/images/miniApps/snack.png'} setPopup={setPopup} componentData={<Snack />} />
                <CardApp title={'Text Locker'} />
                <CardApp title={'File Locker'} />
                <CardApp title={'Weather Now'} />
                {popup}
                {/* <PopupPage /> */}
            </section>
            <h1>Simple UI</h1>
            <section className={css.basicUI}>
                <CardUI title={'Button'} src={'elements/button/btn1.html'} url={'#'} />
                <CardUI title={'Button'} src={'elements/button/btn2.html'} url={'#'} />
                <CardUI title={'Button'} src={'elements/button/btn3.html'} url={'#'} />
                <CardUI title={'Button'} src={'elements/button/btn4.html'} url={'#'} />
                <CardUI title={'Button'} src={'elements/button/btn5.html'} url={'#'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader1.html'} url={'#'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader2.html'} url={'#'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader3.html'} url={'#'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader4.html'} url={'#'} />
            </section>
        </div>
    )
}

export default Portfolio

function Card({ title }) {
    return (
        <main className={css.main2}>
            <h1>{title}</h1>
        </main>
    )
}
function CardUI({ title, src, url }) {
    return (
        <main className={css.main3}>
            <h1>{title}</h1>
            <iframe src={src} />
            <Link href={url}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </Link>
        </main>
    )
}
function CardWeb({ title, detail, img__src, url }) {
    const gen = (x) => parseInt(Math.random() * (x))
    const offset = `path('M0,0 C${gen(-50)},0 ${gen(50)},${gen(50)} ${gen(50)},${gen(-50)} Z') 0deg`
    return (
        <Link style={{ scale: `${1 - Math.random() * 0.1}`, offset: offset }} href={url} target='_blank' className={css.card__web__main}>
            <h1>{title}</h1>
            <div><Image src={img__src} objectFit='cover' fill alt='' /></div>
            <p>{detail}</p>
            <button>{'>'}</button>
        </Link>
    )
}
function CardApp({ title, imageSrc, setPopup, componentData }) {
    // const gen = (x) => parseInt(Math.random() * (x))
    // const offset = `path('M0,0 C${gen(-50)},0 ${gen(50)},${gen(50)} ${gen(50)},${gen(-50)} Z') ${parseInt((Math.random()*2-1)*5)}deg`
    return (
        <div style={{ scale: `${1 - Math.random() * 0.1}`, rotate: `${parseInt((Math.random() * 2 - 1) * 5)}deg` }} className={css.card__app__main}
            onClick={() => setPopup(<PopupPage setPopup={setPopup} componentData={componentData} />)}>
            <h1>{title}</h1>
            <div>
                <Image src={imageSrc} objectFit='cover' fill alt='' />
            </div>
        </div>
    )
}
// function PopupPage({ setPopup, component }) {
//     return (
//         <div className={css.popupApp} >
//             <div onClick={() => setPopup(null)}
//                 style={{
//                     position: 'absolute',
//                     top: '0rem', right: '0rem',
//                     fontSize: '3rem',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     height: '3rem',
//                     width: '3rem',
//                     cursor: 'pointer'
//                 }}>X</div>
//             {component}
//         </div>
//     )
// }
function PopupPage({ setPopup, componentData }) {
    return (
        <div className={css.popupPage} >
            <div onClick={() => setPopup(null)}
                style={{
                    position: 'absolute',
                    top: '0rem', right: '0rem',
                    fontSize: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '3rem',
                    width: '3rem',
                    cursor: 'pointer',
                    zIndex: '1'
                }}>X</div>
            <div className={css.popupApp}>
                {componentData}
            </div>
            <div className={css.popupDetail}>
                <h1>Snack</h1>
                <h2>วิธีใช้</h2>
                <p>หากคุณต้องตัดสินใจว่าซื้อของชิ้นไหนคุ้มกว่ากัน ผมขอแนะนำแอปนี้ เพียงกรอกราคาและน้ำหนักสินค้าลงไป ตัวแอปจะแสดงค่าแถบคะแนนสีฟ้า อันไหนเยอะสุดก็เลือกซื้ออันนั้นแหละ!</p>
                <h2>เกี่ยวกับ...</h2>
                <p>แอปนี้เกิดจากการไปหาเลือกซื้อของแล้วเปรียบเทียบราคาว่าซื้ออันไหนจึงจะคุ้ม ถ้าปริมาณต่อบาทมันเยอะแสดงว่าค่อนข้างคุ้ม แน่นอนว่าใช้เป็นแค่เกณฑ์เบื้องต้น เสียเวลาส่วนใหญ่ไปกับการออกแบบหน้าตาแอป การเขียนโค้ดมีความยุ่งยากตรงการแสดงแถบคะแนน เพราะเราต้องอัปเดตทุกครั้งที่มีการเพิ่มรายการ แล้วต้องปรับสเกลของแถบให้เต็มสำหรับตัวที่คุ้มสุดและเพื่อความดูเข้าใจง่ายอีกด้วย</p>
                <div className={css.popupComment}>

                </div>
            </div>
        </div>
    )
}