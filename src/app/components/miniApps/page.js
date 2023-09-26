'use client'
import React from 'react'
import '../../CSS.css'
import Snack from './Snack'
import RateExchange from './RateExchange'
import Glassmorphism from './Glassmorphism'
import Neomorphism from './Neomorphism'

function MiniAppsPage() {
  return (
    <div >
      <Neomorphism /><br />
      <Glassmorphism /><br />
      <Snack /><br />
      <RateExchange /><br />
    </div>
  )
}

export default MiniAppsPage