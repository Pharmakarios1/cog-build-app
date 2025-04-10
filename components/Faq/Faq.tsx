import Image from "next/image";
import React from "react";
import CarouselComponent from "../Testimonial/_partials/CarouselComponent";
import CollapseComponent from "./_partials/CollapseComponent";

const Faq = () => {
  const FaqImage = {
    container:
      "max-h-[450px] flex flex-col md:flex-row gap-6  w-[90%] lg:w-[100%] mx-auto",
    image: "md:h-[450px] w-full md:w-[50%] rounded-lg",
    collapsecontainer: "md:h-[400px] w-full md:w-[47%] overflow-y-hidden ",
  };
  return (
    <div className="py-8">
      <h2 className="text-center text-2xl p-2 md:text-3xl font-bold  pb-10">
        Testimonials
      </h2>
      <div className={`${FaqImage.container}`}>
        <Image
          src={`/jpg/Faq.jpg`}
          height={500}
          width={600}
          alt="img_testimonial"
          className={` ${FaqImage.image}`}
        />
        <div className={`${FaqImage.collapsecontainer}`}>
          <CollapseComponent />
        </div>
      </div>
    </div>
  );
};

export default Faq;
