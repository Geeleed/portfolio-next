'use client'
import React, { useEffect, useState } from 'react'
import css from './Home.module.css'
import Link from 'next/link'

function Home() {
    return (
        <main className={css.main}>
            <Anim key={'2'} numList={[20, 5]} elementList={[<Sq />, <Sq2 />]} />
            <div style={{ width: 'inherit', height: 'inherit', backgroundColor: '#000000aa' }}></div>
            <div className={css.content}>
                <h1>PORTFOLIO</h1>
                <p>สวัสดีครับ ยินดีที่ได้รู้จัก เว็บนี้ทำไว้เป็นแฟ้มสะสมผลงานด้าน IT</p>
                <div>
                    <button>Resume</button>
                    <button>Profile</button>
                </div>
            </div>
            <Link href={'#profile'} className={css.scroll__down}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </Link>
        </main>
    )
}

export default Home

function Anim({ numList, elementList }) {
    let elems = []
    for (let i = 0; i < elementList.length; i++) {
        let element = elementList[i];
        for (let j = 0; j < numList[i]; j++) {
            elems = [...elems, element]
        }
    }
    return (
        <div className={css.anim__main}>
            {elems}
        </div>
    )
}
const XY = (r, deg) => {
    const angle = deg * Math.PI / 180
    const x = Math.cos(angle) * r
    const y = Math.sin(angle) * r
    return [x, y]
}
function Sq() {
    const [X, Y] = XY(1000, Math.random() * 360)
    return (
        <div className={css.sq} style={{
            offset: `path('M0,0 L${parseInt(X)},${parseInt(Y)}') 0deg`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 1}s`
        }}></div>
    )
}
function Sq2() {
    const [X, Y] = XY(1000, Math.random() * 360)
    return (
        <div className={css.sq2} style={{
            offset: `path('M0,0 L${parseInt(X)},${parseInt(Y)}') 0deg`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            backgroundColor: `var(--tiny-color)`
        }}></div>
    )
}