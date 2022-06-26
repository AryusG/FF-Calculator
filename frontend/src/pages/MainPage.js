import React from 'react'
import Avatar from '../components/Avatar'
import ProgressBar from '../components/ProgressBar'
import Calculator from '../components/Calculator'
import LandingPage from './LandingPage'

function MainPage() {
  return (
    <div className='grid grid-cols-5 lg:grid-cols-2 
      bg-gradient-to-tr from-red-500 to-purple-900 h-screen'>
      <div className='col-span-3 col-start-2'>
        <LandingPage />
        <Avatar />
        <ProgressBar />
        <div>
          <Calculator />
        </div>
      </div>
    </div>
  )
}

export default MainPage