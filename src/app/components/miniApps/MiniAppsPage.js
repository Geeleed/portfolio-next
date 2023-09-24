'use client'
import React from 'react'
import Glassmorphism from './Glassmorphism'
import '../../CSS.css'
import Snack from './Snack'
import RateExchange from './RateExchange'

function MiniAppsPage() {
  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'var(--main-color)'}}>
      <Glassmorphism /><br />
      <Snack /><br />
      <RateExchange /><br />
    </div>
  )
}

export default MiniAppsPage

// import React from 'react'

// function Page() {
//   return (
//     <div>page in miniApps</div>
//   )
// }

// export default Page