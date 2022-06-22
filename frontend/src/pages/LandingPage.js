import React from 'react'

function LandingPage() {
  const handleSignIn = () => {
    // Do your ting
  }

  return (
    <div>
      <button 
        className='btn bg-orange-400 text-white'
        onClick={handleSignIn}
        >
        Sign In</button>
    </div>
  )
}

export default LandingPage