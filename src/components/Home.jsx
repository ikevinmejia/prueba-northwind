import React from 'react'
import Department from './Department'
import Details from './Details'
import Header from './Header'

const Home = () => {
  return (
    <div className='w-full flex flex-col container m-auto'>
      <Header/>
      <Department/>
      <Details/>
    </div>
  )
}

export default Home