import React from 'react'
import GameList from './components/GameList'

const Discover = () => {
  return (
    <>
    <div className='text-gray-300 w-full text-center text-4xl mt-4' >Hidden Gems</div>
    <div className='text-gray-500 w-full text-center text-md mb-8' >Discover hand-picked indie games that deserve your attention.</div>
    <div className='container mx-auto px-4'>
      <GameList />
    </div>
    </>
  )
}

export default Discover