import { Button } from "antd"
import Image from "next/image"


const CallToAction = () => {
    const ctaImg = {
        img: 'w-full h-[400px] object-cover',
        btn:{
            padding:'20px 10px',
            fontSize:'14px', fontWeight:'600'
        }
    }
  return (
    <div className="relative w-full">
        <div className="absolute inset-0 w-[80%] mx-auto  flex flex-col justify-center items-center gap-3">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Ready to grow in Faith?</h2>
            <p className="text-center text-sm text-white md:text-xl">Start your journey to deeper biblical understanding today. Join thousands of satisfied users who have transformed their Bible study experience with BibleEase.</p>
            <Button style={ctaImg.btn} type="default">
                Start Your Free Trial Now
            </Button>
        </div>
        <Image src={`/jpg/cta.jpg`} width={300} height={300} className={`${ctaImg.img}`} alt="cta_img"/>
    </div>
  )
}
  
export default CallToAction