import { QuestionOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { Tag } from 'antd';
interface ClientCardProps{
    name:string;
    content:string;
    

}
const ClientCard: React.FC<ClientCardProps> = ({name, content}) => {
  const testimonialStyle ={
    img: "w-20 h-20 rounded-full",

  }
  return (
<div className={`w-full h-[400px]  p-2 `}>
       <div className="flex items-center gap-6">
        <div>
          <Image src={'/jpg/hand.jpg'} width={100} height={100} alt='testimonial-img' className={`${testimonialStyle.img}`} />
        </div>
       <h3 className='text-md font-semibold'>{name}</h3>
       </div>
        <div className="mt-8 p-5">
        <p className="text-sm" ><span className='text-5xl text-[#D10064] px-6'>&ldquo;</span>{content}</p>
        </div>
    </div>
  )
}

export default ClientCard