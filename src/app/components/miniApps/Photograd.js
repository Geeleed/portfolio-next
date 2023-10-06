import React, { useRef, useState } from 'react'
import css from './Photograd.module.css'
import Image from 'next/image'

function Photograd() {
    const [base64, setBase64] = useState()
    const inputRef = useRef()
    const [contrast, setContrast] = useState(50);
    const [hue, setHue] = useState(0)
    const [saturate, setSaturate] = useState(100)
    const [brightness, setBrightness] = useState(100)
    return (
        <div className={css.main}>
            <div>
                <h1>Upload Image</h1>
                <input ref={inputRef} onChange={e => {
                    const reader = new FileReader()
                    const file = e.target.files[0]
                    const filetype = file.type
                    console.log(filetype)
                    // แปลงไฟล์เป็น base64 ซึ่งเป็น string
                    reader.readAsDataURL(file)
                    // โหลด base64 ออกมาจาก reader
                    reader.onloadend = () => { setBase64(reader.result) }
                }} type='file' />
            </div>
            <div style={{overflow:'hidden'}}>
                {base64 && <Image style={{ filter: `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`}}
                    src={base64} width={400} height={400} alt='' onClick={() => inputRef.current.click()} />}
            </div>
            <div className={css.ctrl}>
                <input type='range' onChange={e => setHue(e.target.value)} min={0} max={500} />
                <input type='range' onChange={e => setSaturate(e.target.value)} min={0} max={500} />
                <input type='range' onChange={e => setBrightness(e.target.value)} min={0} max={500} />
                <input type='range' onChange={e => setContrast(e.target.value)} min={0} max={500} />
            </div>
        </div>
    )
}

export default Photograd

function LoadImage() {
    const [base64, setBase64] = useState()
    return (
        <div>
            <input onChange={e => {
                const reader = new FileReader()
                const file = e.target.files[0]
                const filetype = file.type
                console.log(filetype)
                // แปลงไฟล์เป็น base64 ซึ่งเป็น string
                reader.readAsDataURL(file)
                // โหลด base64 ออกมาจาก reader
                reader.onloadend = () => { setBase64(reader.result) }
            }} type='file' />
            <br />
            {/* แสดงไฟล์ ถ้าเป็นรูปก็ใช้แท็ก img ถ้า video ก็ใช้แท็ก video ... */}
            <img src={base64} />
        </div>
    )
}