import React, { useState } from 'react'
import css from './Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Snack from './miniApps/Snack'
import RateExchange from './miniApps/RateExchange'
import Glassmorphism from './miniApps/Glassmorphism'
import Neomorphism from './miniApps/Neomorphism'
import MiniGameCard from './miniApps/MiniGameCard'

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
            </section>
            <section className={css.miniProject}>
                <h1>Mini Apps</h1>
                <CardApp imageSrc={'/images/miniApps/glassmorphism.png'} setPopup={setPopup}
                    componentData={{
                        component: <Glassmorphism />,
                        title: 'Glassmorphism',
                        how: 'effect กระจก ลองปรับเลื่อนดู เสร็จแล้วจะได้โค้ด CSS คัดลอกไปใช้ได้เลย',
                        about: 'เป็นแอปทำ effect แบบกระจก ซึ่งเป็น UI ที่นิยมใช้กันเยอะ การปรับหลัก ๆ จะเป็นความ blur กับสีกระจกที่เป็น gradient',
                        href: 'https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Glassmorphism.js'
                    }} />
                <CardApp imageSrc={'/images/miniApps/neomorphism.png'} setPopup={setPopup}
                    componentData={{
                        component: <Neomorphism />,
                        title: 'Neomorphism',
                        how: 'ลองเล่นดูเองจะเข้าใจง่ายกว่า เสร็จแล้วจะได้โค้ด CSS คัดลอกไปใช้ได้เลย',
                        about: 'ข้อสำคัญเรื่องนี้คือการปรับค่า light ในโหมดสี hsl ซึ่งต่างจากค่าเดิมอยู่ที่ประมาณ 10%-20% จะมีส่วนที่เป็นเงาซึ่งต้องปรับค่าแสงลง ส่วนที่โดยแสงไฟก็ต้องปรับค่าแสงเพิ่ม ย้ำนะว่าปรับค่า l ใน hsl',
                        href: 'https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Neomorphism.js'
                    }} />
                <CardApp imageSrc={'/images/miniApps/rateExchange.png'} setPopup={setPopup}
                    componentData={{
                        component: <RateExchange />,
                        title: 'Rate Exchange',
                        how: 'เลือกสกุลเงินที่คุณต้องการแปลง ซึ่งเรามีให้เลือกเยอะเลยหละ',
                        about: 'แอปนี้ใช้งาน api เกี่ยวกับอัตราแลกเปลี่ยน ดึงข้อมูลมาแล้วที่เหลือเป็นเรื่องการคำนวณ แอปนี้ยุ่งยากตรงที่ทำให้ input และ output เป็น element เดียวกัน ทุกครั้งที่มีบางอย่างเปลี่ยนแปลงไม่ว่าจะเลือกสกุลเงินหรือเปลี่ยนจำนวนเงิน ก็จะคำนวณแล้วแสดงผลใหม่ทันที',
                        href: 'https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/RateExchange.js'
                    }} />
                <CardApp imageSrc={'/images/miniApps/snack.png'} setPopup={setPopup}
                    componentData={{
                        component: <Snack />,
                        title: 'Snack',
                        how: 'แอปเปรียบเทียบความคุ้มค่า หากต้องตัดสินใจว่าซื้อของชิ้นไหนคุ้มกว่า ขอแนะนำแอปนี้ กรอกราคาและน้ำหนักสินค้าลงไป ตัวแอปจะแสดงค่าแถบคะแนนสีฟ้า อันไหนเยอะสุดก็เลือกซื้ออันนั้นแหละ!',
                        about: 'แอปนี้เกิดจากการไปหาเลือกซื้อของแล้วเปรียบเทียบราคาว่าซื้ออันไหนจึงจะคุ้ม ถ้าปริมาณต่อบาทมันเยอะแสดงว่าค่อนข้างคุ้ม แน่นอนว่าใช้เป็นแค่เกณฑ์เบื้องต้น เสียเวลาส่วนใหญ่ไปกับการออกแบบหน้าตาแอป การเขียนโค้ดมีความยุ่งยากตรงการแสดงแถบคะแนน เพราะเราต้องอัปเดตทุกครั้งที่มีการเพิ่มรายการ แล้วต้องปรับสเกลของแถบให้เต็มสำหรับตัวที่คุ้มสุดและเพื่อความดูเข้าใจง่ายอีกด้วย',
                        href: 'https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Snack.js'
                    }} />
                <CardApp imageSrc={'/images/miniApps/miniGameByReactJs.png'} setPopup={setPopup}
                    componentData={{
                        component: <MiniGameCard />,
                        title: 'Mini Game By React.js',
                        how: 'เกมส์จับคู่ จำให้ได้ว่าสีไหนอยู่อันไหน สีมันมีหลายเฉด เล่นให้ชนะ นะ! มันยากมาก ยิ่งหัวใจเหลือน้อยมันจะยิ่งเต้นเร็วนะ',
                        about: 'เกมส์นี้ใช้ react.js ทำ เป็นเกมส์จับคู่ง่าย ๆ จะสุ่มสีและตำแหน่งทุกครั้งเมื่อเริ่มเล่น',
                        href: 'https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/MiniGameCard.js'
                    }} />
                {popup}
            </section>
            <h1>Simple UI</h1>
            <section className={css.basicUI}>
                <CardUI title={'Button'} src={'elements/button/btn1.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn1.html'} />
                <CardUI title={'Button'} src={'elements/button/btn2.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn2.html'} />
                <CardUI title={'Button'} src={'elements/button/btn3.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn3.html'} />
                <CardUI title={'Button'} src={'elements/button/btn4.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn4.html'} />
                <CardUI title={'Button'} src={'elements/button/btn5.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn5.html'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader1.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader1.html'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader2.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader2.html'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader3.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader3.html'} />
                <CardUI title={'Loader Animation'} src={'elements/loader/loader4.html'} url={'https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader4.html'} />
            </section>
            <h1>My APIs Service</h1>
            <section className={css.myAPI}>
                <MyAPI
                    api_name={'SHA-256'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/sha256/{text}/'}
                    api_method={'GET'}
                    api_input={'{text} คือ ข้อความที่ต้องการเข้ารหัส SHA-256'}
                    api_output={'json เป็น SHA-256 เลขฐาน 16'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Covert Base'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/convert_base/{number}/{from_base}/{to_base}/'}
                    api_method={'GET'}
                    api_input={'เลขจำนวนเต็ม'}
                    api_output={'json'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Random Real Number'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/random/{min}/{max}/{num}/'}
                    api_method={'GET'}
                    api_input={'{min} และ {max} เป็น float และ {num} เป็นจำนวนการสุ่ม'}
                    api_output={'json เก็บ array ของเลขที่สุ่มได้'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Permutation'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/permutation/{n}/{r}/'}
                    api_method={'GET'}
                    api_input={'{n} และ {r} เป็นจำนวนเต็ม'}
                    api_output={'json จำนวนรูปแบบการเรียงสับเปลี่ยนรอบละ r สิ่งจาก n สิ่ง'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Commutation'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/commutation/{n}/{r}/'}
                    api_method={'GET'}
                    api_input={'{n} และ {r} เป็นจำนวนเต็ม'}
                    api_output={'json จำนวนรูปแบบการจัดกลุ่มรอบละ r สิ่งจาก n สิ่ง'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Delay'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/delay/{second}'}
                    api_method={'GET'}
                    api_input={'{second} เวลาเป็นวินาทีที่ทำการรอ'}
                    api_output={'รอเวลา'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />
                <MyAPI
                    api_name={'Linear Fitting'}
                    api_endpoint={'https://math-hub-gamma.vercel.app/linear-fit-2d/'}
                    api_method={'POST'}
                    api_input={'ไฟล์ .csv ที่มี data 2 column'}
                    api_output={'json ค่าความชัน จุดตัดแกน y และค่าสถิติอื่น ๆ'}
                    api_href={'https://github.com/Geeleed/math-hub-api/blob/main/main.py'} />

            </section>
        </div>
    )
}

export default Portfolio

function CardUI({ title, src, url }) {
    return (
        <main className={css.main3}>
            <h1>{title}</h1>
            <iframe src={src} />
            <GitHub href={url} />
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
        <div
            // style={{ scale: `${1 - Math.random() * 0.1}`, rotate: `${parseInt((Math.random() * 2 - 1) * 5)}deg` }}
            className={css.card__app__main}
            onClick={() => setPopup(<PopupPage setPopup={setPopup} componentData={componentData} />)}>
            <h1>{title}</h1>
            <div>
                <Image src={imageSrc} objectFit='cover' fill alt='' />
            </div>
        </div>
    )
}
function PopupPage({ setPopup, componentData }) {
    const [toggle, setToggle] = useState(true)
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
                {componentData.component}
            </div>
            <div className={toggle ? css.popupDetail : css.popupDetail2}>
                <h1>{componentData.title}</h1>
                <h2>วิธีใช้</h2>
                <p>{componentData.how}</p>
                <h2>เกี่ยวกับ...</h2>
                <p>{componentData.about}</p>
                <label>Source </label><GitHub href={componentData.href} />
            </div>
            <button className={toggle ? css.helpBtn : css.helpBtn2} onClick={() => setToggle(i => !i)}>?</button>
        </div>
    )
}

function GitHub({ href }) {
    return (
        <Link href={href} className={css.github} target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        </Link>
    )
}

function MyAPI({ api_name, api_endpoint, api_method, api_input, api_output, api_detail, api_href }) {
    return (
        <div className={css.api_card}>
            <h1>{api_name} <GitHub href={api_href} /></h1>
            <p>Endpoint: {api_endpoint}</p>
            <p>Method: {api_method}</p>
            <p>Input: {api_input}</p>
            <p>Output: {api_output}</p>
            {api_detail && <p>Detail: {api_detail}</p>}
            {/* <div>Source </div> */}
        </div>
    )
}