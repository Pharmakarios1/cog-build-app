// Custom components imports
import CustomMain from "@/components/CustomMain";
import WhyChoseUs from "@/components/WhyChoseUs";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonial from "@/components/Testimonial/Testimonial";
import Faq from "@/components/Faq/Faq";
import CallToAction from "@/components/CallToAction/CallToAction";

export default function HomePage() {
  return (
      <CustomMain >
        <Hero/>
        <WhyChoseUs/>
        <Explore/>
        <HowItWorks/>
        <Testimonial/>
        <Faq/>
        <CallToAction/>
      </CustomMain>
  );
}
