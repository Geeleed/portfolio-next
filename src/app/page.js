'use client'
import React, { useEffect, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(null);

  useEffect(() => {
    const data = (
      <>
        <Navbar />
        <Home />
        <Profile />
        <Portfolio />
        <Contact />
        <ContactBar />
      </>
    )
    setLoaded(data)
    setIsLoading(false);
  }, []);

  return (
    isLoading ?
      (
        <iframe src='/elements/loader/loader1.html' style={{
          position: 'absolute', backgroundColor: 'white',
          width: '100%', height: '100%', border: 'none', filter: 'invert(1)'
        }} />
      )
      :
      (
        loaded
      )
  )
}

export default Page