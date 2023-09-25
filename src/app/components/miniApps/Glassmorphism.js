'use client'
import React, { useState } from 'react'
import css from './Glassmorphism.module.css'
function Glassmorphism() {
  const [color, setColor] = useState('#000000')
  const [op, setOp] = useState(0.2)
  const [ol, setOl] = useState(0.3)
  const [blur, setBlur] = useState(5)
  function rgba(rgbHex, a) {
    let r = rgbHex[1] + rgbHex[2]
    let g = rgbHex[3] + rgbHex[4]
    let b = rgbHex[5] + rgbHex[6]
    r = parseInt(r, 16)
    g = parseInt(g, 16)
    b = parseInt(b, 16)
    return `rgba(${r},${g},${b},${a})`
  }
  return (
    <div className={css.main}>
      <h1>Glassmorphism</h1>
      <div className={css.glass}>
        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
          border: `1px solid ${rgba(color, ol)}`,
          background: `linear-gradient(130deg,${rgba(color, op)},${rgba('#ffffff', op)},${rgba(color, op)})`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          boxShadow: `5px 5px 20px #00000055`
        }}>
        </div>)}
      </div>
      <p className={css.p}>
        {`border: 1px solid ${rgba(color, ol)};
          background: linear-gradient(130deg,${rgba(color, op)},${rgba('#ffffff', op)},${rgba(color, op)});
          backdrop-filter: blur(${blur}px);
          -webkit-backdrop-filter: blur(${blur}px);
          box-shadow: 5px 5px 20px #00000075;`}
      </p>
      <div className={css.ctrl}>
        <div><label>{color}</label><input type='color' onChange={e => setColor(e.target.value)} value={color} /></div>
        <div><label>Opacity</label><input className={css.inputRange} type='range' onChange={e => setOp(e.target.value)} min={0} max={1} step={0.01} value={op} /></div>
        <div><label>Outline</label><input className={css.inputRange} type='range' onChange={e => setOl(e.target.value)} min={0} max={1} step={0.01} value={ol} /></div>
        <div><label>Blur   </label><input className={css.inputRange} type='range' onChange={e => setBlur(e.target.value)} min={0} max={20} step={0.5} value={blur} /></div>
      </div>
    </div>
  )
}

export default Glassmorphism