import Image from 'next/image'
import Link from 'next/link';
import path from 'path';
import React from 'react'

interface CardProps{
    img:string;
    path:string
}

const Card: React.FC<CardProps> = (props) => {
    const {img, path} = props
    const baseColor ='bg-[#d10064]'
  return (
    <>
    <button className={` ${baseColor} w-full sm:w-[350px] h-[300px]  rounded-md relative `}>
      <div className='absolute inset-0 bg-gradient-to-t from-black to-[] hover:bg-[rgba(209,0,101,.1)] hover:border-4 border-[#d10064] rounded-md transition-all duration-300'></div>
        <Image src={`/jpg/${img}`} className='w-full' alt="" width={`350`} height={`300`} style={{height:'300px', objectFit:'cover', backgroundRepeat:'no-repeat', borderRadius:'6px'}}/>
        <div className='absolute left-2/6 lg:left-5 bottom-3 text-sm text-[#d10064] border p-3 rounded-2xl'>
          {path}
        </div>
    </button>
    </>
  )
}

export default Card