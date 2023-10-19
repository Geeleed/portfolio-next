// 'use client'
// import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import './globals.css'
import './CSS.css'

import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ContactBar from './components/ContactBar'
// import LoadingPage from './components/LoadingPage'
// function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loaded, setLoaded] = useState(null);

//   useEffect(() => {
//     const data = (
//       <div>
//         <Navbar />
//         <Home />
//         <Profile />
//         <Portfolio />
//         <Contact />
//         <ContactBar />
//       </div>
//     )
//     setLoaded(data)
//     setIsLoading(false);
//   }, []);

//   return (
//     isLoading ? <LoadingPage /> : loaded
//   )
// }

// export default Page

// function Page() {
//   return (
//     <>
//     <div>component นี้ render บน {process.browser ? 'client':'server'}</div>
//     </>
//   )
// }

// export default Page

// import React from 'react'

function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Portfolio />
      <Contact />
      <ContactBar />
    </div>
  )
}

export default Page