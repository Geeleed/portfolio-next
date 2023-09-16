
// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

// import React from 'react'
// import css from './page.module.css'
// import Portfolio from './components/portfolio/Portfolio'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Profile from './components/Profile'
// import Contact from './components/Contact'
// import WebBoard from './components/WebBoard'


// function Index() {
//   return (
//     <main className={css.main}>
//       <Navbar/>
//       <Home/>
//       <Profile/>
//       <Portfolio/>
//       <Contact/>
//       <WebBoard/>
//       <footer>Surasak K</footer>
//     </main>
//   )
// }

// export default Index

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
import './globals.css'
import './CSS.css'

// function Page() {
//   return (
//     <main className={page_style.main}>
//       Test Zone
//       <div>
//         <Glassmorphism/>
//         <PhotoEditor/>
//       </div>
//       <section className={page_style.example}>
//       </section>
//       <ShowUI title={'Hello'} detail={'ไม่มีอะไรทั่งนั้น'} source={'#'}/>
//     </main>
//   )
// }

// export default Page

function Page() {
  return (
    <>
      {/* <style>
        @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap')
      </style> */}
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
        />
      </Head> */}
      {/* <body style={{ fontFamily: 'Prompt, sans-serif' }}> */}
      {/* <body> */}
        <Navbar />
        <Home />
        <Profile />
      {/* </body> */}
    </>
  )
}

export default Page