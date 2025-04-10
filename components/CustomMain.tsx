import React, { ReactNode } from 'react'
interface MainProps{
    children: ReactNode;
}
const CustomMain: React.FC<MainProps> = ({children}) => {
  return (
    <main className='flex-1 bg-[rgba(209,0,101,.1)]'>
        {children}
    </main>
  )
}

export default CustomMain