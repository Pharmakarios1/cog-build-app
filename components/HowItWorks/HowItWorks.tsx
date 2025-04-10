import React from 'react'
import ListItem from './_partial'
const HowItWorks = () => {
  const howItWorkdata =[
      {number:'01', heading:'Sign Up', text:'Create your account in seconds'},
      {number:'02', heading:'Choose your study', text:'Selects from various Bible study topics and Formats'},
      {number:'03', heading:'Get AI insights', text:'Recieve Ai-Powered explanations and study guide'}
  ]
  return (
   <div className='lg:h-[500px] mt-5 grid grid-cols-1 place-items-center'>
   <h1 className='text-center text-2xl sm:text-3xl font-[900]'>How Rays of <span className='text-[#d10064]'>Truth</span> works</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {howItWorkdata.map((item)=>{
        return(
          <ListItem key={item.number} number={item.number} heading={item.heading} text={item.text}/>
        )
      })}
    </div>
   </div>
  )
}

export default HowItWorks