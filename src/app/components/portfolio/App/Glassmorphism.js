'use client'
import { React, useRef, useState } from 'react'
import css from './style.module.css'

function Glassmorphism() {
    const [color, setColor] = useState('#eeeeee')
    const [transparent, setTransparent] = useState(0.2)
    const [borderSize, setBorderSize] = useState(2)
    const [borderTransparent, setBorderTransparent] = useState(0.2)
    const [borderRadius, setBorderRadius] = useState(10)
    const [blur, setBlur] = useState(5)
    const objectRef = useRef()
    return (
        <div className={css.glass__body}>
            <h1>Glassmorphism</h1>
            <div ref={objectRef} className={css.glass__object} style={{
                background: `${rgba(color, transparent)}`,
                border: `${borderSize}px solid ${rgba(color, borderTransparent)}`,
                borderRadius: `${borderRadius}px`,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
            }}></div>
            <p style={{ margin: '1rem 0' }}>
                {`
                background: ${rgba(color, transparent)};
                border: ${borderSize}px solid ${rgba(color, borderTransparent)};
                borderRadius: ${borderRadius}px;
                backdrop-filter: blur(${blur}px);
                -webkit-backdrop-filter: blur(${blur}px);
                `}
                {console.log(objectRef.current)}
            </p>
            <div className={css.pad}>
                <label>Color</label>
                <input type='color' value={color} onChange={e => { setColor(e.target.value) }} />
                <label>Transparent</label>
                <input type='range' min={0} max={1} step={0.01} value={transparent} onChange={e => { setTransparent(e.target.value) }} />
                <label>Border Size</label>
                <input type='range' min={0} max={10} step={1} value={borderSize} onChange={e => { setBorderSize(e.target.value) }} />
                <label>Border Transparent</label>
                <input type='range' min={0} max={1} step={0.01} value={borderTransparent} onChange={e => { setBorderTransparent(e.target.value) }} />
                <label>Border Radius</label>
                <input type='range' min={0} max={100} step={1} value={borderRadius} onChange={e => { setBorderRadius(e.target.value) }} />
                <label>Blur</label>
                <input type='range' min={0} max={30} step={1} value={blur} onChange={e => { setBlur(e.target.value) }} />
                <button>Copy CSS</button>
            </div>
        </div>
    )
}

export default Glassmorphism

function rgba(rgbHexColorCode, transparent) {
    let red = rgbHexColorCode[1] + rgbHexColorCode[2]
    let green = rgbHexColorCode[3] + rgbHexColorCode[4]
    let blue = rgbHexColorCode[5] + rgbHexColorCode[6]
    red = parseInt(red, 16)
    green = parseInt(green, 16)
    blue = parseInt(blue, 16)
    let rgba = `rgba(${red},${green},${blue},${transparent})`
    return rgba
}