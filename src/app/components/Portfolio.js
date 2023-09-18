import React from 'react'
import css from './Portfolio.module.css'

function Portfolio() {
    return (
        <>
            <section className={css.miniProject}>
                {/* <h1>Portfolio</h1> */}
                <div className={css.pad}>
                    <Card title={'Glassmorphism'} />
                    <Card title={'Neomorphism'} />
                    <Card title={'Photo Editor'} />
                    <Card title={'Rate Exchange'} />
                    <Card title={'Best Buy'} />
                    <Card title={'Text Locker'} />
                    <Card title={'File Locker'} />
                    <Card title={'Weather Now'} />
                </div>
            </section>
            <section className={css.basicUI}>
                <CardUI title={'Weather Now'} />
                <CardUI title={'Weather Now'} />
                <CardUI title={'Weather Now'} />
                <CardUI title={'Weather Now'} />
            </section>
        </>
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
function CardUI({ title }) {
    return (
        <main className={css.main3}>
            <h1>{title}</h1>
        </main>
    )
}