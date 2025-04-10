import { Carousel } from "antd";
import ClientCard from "./ClientCard";
import "antd/dist/reset.css";

const CarouselComponent = () => {
  const contentStyle = {
    contain: "h-[300px] w-[100%]",
  };
  const data = [
    { name: "Maldo Reese", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum? Esse maiores placeat officia aut cupiditate iste dolorum ullam error. Perspiciatis natus temporibus asperiores, earum maxime eveniet ea eum obcaecati?" },
    { name: "Blessed Reese", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum? Esse maiores placeat officia aut cupiditate iste dolorum ullam error. Perspiciatis natus temporibus asperiores, earum maxime eveniet ea eum obcaecati?" },
    { name: "Joy Reese", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum? Esse maiores placeat officia aut cupiditate iste dolorum ullam error. Perspiciatis natus temporibus asperiores, earum maxime eveniet ea eum obcaecati?" },
    { name: "Victoria Reese", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum? Esse maiores placeat officia aut cupiditate iste dolorum ullam error. Perspiciatis natus temporibus asperiores, earum maxime eveniet ea eum obcaecati?" },
  ];
  return (
    <Carousel autoplay arrows={true}>
      {data.map((datum) => {
        return (
          <div key={datum.name} className={`${contentStyle.contain}`}>
            <ClientCard
              name={datum.name}
              content={
               datum.content
              }
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;

