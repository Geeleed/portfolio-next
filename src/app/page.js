
import React from 'react'
import page_style from './page.module.css'
import Glassmorphism from './components/Glassmorphism'
import Image from 'next/image'
import ShowUI from './reuses/ShowUI'
import PhotoEditor from './components/PhotoEditor'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Head from 'next/head'
// import './globals.css'
import './CSS.css'

import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ContactBar from './components/ContactBar'

function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Profile />
      <Portfolio />
      <Contact />
      <ContactBar/>
    </>
  )
}

export default Page