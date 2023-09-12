import React from 'react'
import css from './style.module.css'
import Image from 'next/image'

function LPCard(props) {
    const { title, detail, image } = props
    return (
        <div className={css.box}>
            {/* <Image className={css.img} src={image} width={500} height={250} alt='' /> */}
            <Image className={css.img} src={image} objectFit='cover' layout='fill' alt='' />
            <div>
                <h3>{title}</h3>
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default LPCard