// 'use client'
// import React, { useState } from 'react'
// import css from './Glassmorphism0.module.css'
// function Glassmorphism0() {
//   const [color, setColor] = useState('#eeeeee')
//   const [opacity, setOpacity] = useState(0.05)
//   const [borderOpacity, setBorderOpacity] = useState(0.5)
//   const [blur, setBlur] = useState(10)
//   let style = `background-color: ${rgba(color, opacity)}; border: 1px solid ${rgba(color, borderOpacity)}; backdrop-filter: blur(${blur}px); -webkit-backdrop-filter: blur(${blur}px)`
//   return (
//     <div className={css.main}>
//       <h1>Glassmorphism</h1>
//       <div className={css.content}>
//         <div className={css.glass} style={{
//           borderRadius: `10px`,
//           boxShadow: `2px 3px 20px #333`,
//           backgroundColor: `${rgba(color, opacity)}`,
//           border: `1px solid ${rgba(color, borderOpacity)}`,
//           backdropFilter: `blur(${blur}px)`,
//           WebkitBackdropFilter: `blur(${blur}px)`
//         }}>
//         </div>
//         <div className={css.control}>
//           <label for='color'>Color</label>
//           <input type='color' name='color' onChange={e => setColor(e.target.value)} value={color} />
//           <label for='opacity'>Opacity</label>
//           <input type='range' name='opacity' className={css.inputRange} onChange={e => setOpacity(e.target.value)} min={0} max={1} step={0.01} value={opacity} />
//           <label for='borderOpacity'>Border</label>
//           <input type='range' name='borderOpacity' className={css.inputRange} onChange={e => setBorderOpacity(e.target.value)} min={0} max={1} step={0.01} value={borderOpacity} />
//           <label for='blur'>Blur</label>
//           <input type='range' name='blur' className={css.inputRange} onChange={e => setBlur(e.target.value)} min={0} max={20} step={0.5} value={blur} />
//         </div>
//       </div>
//       <div className={css.css}>
//         <p>{style}</p>
//         <i className={css.copy} onClick={() => navigator.clipboard.writeText(style)}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z" />
//           </svg>
//         </i>
//       </div>
//     </div>
//   )
// }

// export default Glassmorphism0

// function rgba(rgbHex, a) {
//   let r = rgbHex[1] + rgbHex[2]
//   let g = rgbHex[3] + rgbHex[4]
//   let b = rgbHex[5] + rgbHex[6]
//   r = parseInt(r, 16)
//   g = parseInt(g, 16)
//   b = parseInt(b, 16)
//   return `rgba(${r},${g},${b},${a})`
// }