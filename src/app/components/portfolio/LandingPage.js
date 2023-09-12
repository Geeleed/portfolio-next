import React from 'react'
import Image from 'next/image'
import css from './style.module.css'
import LPCard from '@/app/reuses/LPCard'
import Link from 'next/link'

function LandingPage() {
  return (
    <div style={{ padding: '0 10%' }} className={css.lp__box}>
      <Link href='https://lp-1-nu.vercel.app/' target='_blank'>
        <LPCard title='Title' detail='Detail something...' image='/asset/lp1.jpg' />
      </Link>
      <Link href='https://lp-2-two.vercel.app/' target='_blank'>
        <LPCard title='Title' detail='Detail something...' image='/asset/lp2.jpg' />
      </Link>
      <Link href='https://lp-4-alpha.vercel.app/' target='_blank'>
        <LPCard title='Title' detail='Detail something...' image='/asset/lp4.jpg' />
      </Link>
      <Link href='https://lp-5.vercel.app/' target='_blank'>
        <LPCard title='Title' detail='Detail something...' image='/asset/lp5.jpg' />
      </Link>
      {/* <div className={css.lp__box}>
            <a target='_blank' href='https://lp-1-nu.vercel.app/'><Image className={css.lp__img} src='/asset/lp1.jpg' width={500} height={250} alt='loading...' /></a>
            <a target='_blank' href='https://lp-2-two.vercel.app/'><Image className={css.lp__img} src='/asset/lp2.jpg' width={500} height={250} alt='loading...' /></a>
            <a target='_blank' href='https://lp-4-alpha.vercel.app/'><Image className={css.lp__img} src='/asset/lp4.jpg' width={500} height={250} alt='loading...' /></a>
            <a target='_blank' href='https://lp-5.vercel.app/'><Image className={css.lp__img} src='/asset/lp5.jpg' width={500} height={250} alt='loading...' /></a>
          </div> */}
    </div>
  )
}

export default LandingPage