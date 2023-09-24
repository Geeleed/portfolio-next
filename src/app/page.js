'use client'
import React, { useEffect, useState } from 'react'
import page_style from './page.module.css'
import Image from 'next/image'
import ShowUI from './reuses/ShowUI'
import PhotoEditor from './components/PhotoEditor'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Head from 'next/head'
import './globals.css'
import './CSS.css'

import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ContactBar from './components/ContactBar'
import Glassmorphism from './components/miniApps/Glassmorphism'
import LoadingPage from './components/LoadingPage'
import MiniAppsPage from './components/miniApps/MiniAppsPage'

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(null);

  useEffect(() => {
    const data = (
      <>
        {/* <Glassmorphism /> */}
        <Navbar />
        <Home />
        <Profile />
        <Portfolio />
        <Contact />
        <ContactBar />
        <MiniAppsPage/>
      </>
    )
    setLoaded(data)
    setIsLoading(false);
  }, []);

  return (
    isLoading ?
      (
        <LoadingPage />
      )
      :
      (
        loaded
      )
  )
}

export default Page