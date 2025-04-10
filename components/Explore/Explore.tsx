import React from 'react'
import CustomMain from '../CustomMain'
import Card from './_partials/Card'

const Explore = () => {
  return (
    <CustomMain>
          <h2 className='text-center pt-10 text-base sm:text-xl md:text-3xl text-pink-600 font-semibold'>Explore Our Features</h2>
       <div className='flex items-center justify-center flex-wrap  mx-auto w-full gap-4 py-8 px-4 lg:px-16'>
        <Card img="praying-hands.jpg" path='AI Bible Study'/>
        <Card img="community.jpg" path='Community Groups'/>
        <Card img="bible.jpg" path='Study Resources'/>
       </div>
    </CustomMain>
  )
}

export default Explore