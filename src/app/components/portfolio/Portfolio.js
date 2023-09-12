import React from 'react'
import LandingPage from './LandingPage'
import UI from './UI'
import MiniGame from './MiniGame'
import Clone from './Clone'
import API from './API'
import App from './App/App'

function Portfolio() {
  return (
    <div>
        <LandingPage/>
        <UI/>
        <MiniGame/>
        <App/>
        <Clone/>
        <API/>
    </div>
  )
}

export default Portfolio