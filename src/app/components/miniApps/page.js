'use client'
import React from 'react'
import '../../CSS.css'
import Snack from './Snack'
import RateExchange from './RateExchange'
import Glassmorphism from './Glassmorphism'

function MiniAppsPage() {
  return (
    <div >
      <Glassmorphism/>
      <Snack /><br />
      <RateExchange /><br />
    </div>
  )
}

export default MiniAppsPage