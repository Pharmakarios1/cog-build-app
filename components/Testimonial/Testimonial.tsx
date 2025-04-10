import Image from 'next/image'
import CarouselComponent from './_partials/CarouselComponent'


const Testimonial = () => {
  const CarouselImage ={
    container: 'min-h-[400px] flex flex-col md:flex-row gap-6 place-items-center  shadow-[3px_4px_16px_0px_#00000080] w-[90%] lg:w-[80%] mx-auto',
    image:'md:h-[400px] w-full md:w-[40%]',
    caroselcontainer: 'md:h-[400px] w-full md:w-[55%]'
  }
  return (
   <div className='py-8'>
    <h2 className='text-center text-2xl p-2 md:text-3xl font-bold pb-10'>Testimonials</h2>
     <div className={`${CarouselImage.container}`}>
        <Image src={`/jpg/userSay.jpg`} height={500} width={600} alt='img_testimonial' className={` ${CarouselImage.image}`}/>
       <div className={`${CarouselImage.caroselcontainer}`}>
       <CarouselComponent/>
       </div>
    </div>
   </div>
  )
}

export default Testimonial