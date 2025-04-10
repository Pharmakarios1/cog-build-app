import React from 'react'
interface ListItemProps{
    number:string;
    heading:string;
    text:string;

}
const ListItem: React.FC<ListItemProps> = ({number,heading, text}) => {
  return (
    <div className="grid grid-cols-1 gap-2 place-items-center p-3">
    <span className='border p-2 w-10 rounded-lg bg-[#d10064] text-white font-bold'>{number}</span>
    <p className='text-md md:text-xl font-semibold'>{heading}</p>
    <p className='text-sm'>{text}</p>
   </div>
  )
}

export default ListItem