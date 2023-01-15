import React from 'react'
import '../styleSheets/Main.css'
import MainHeader from './MainHeader'
import SessionModal from './SessionModal'

const Main = () => {
  return (
    <div className='main'>
        <MainHeader />
        <SessionModal/>
    </div>
  )
}

export default Main