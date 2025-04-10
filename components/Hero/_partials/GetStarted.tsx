//third parties Imports
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const GetStarted = () => {
  return (
    <div className="px-8 sm:px-16 mt-16 lg:mt-0">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-12 md:leading-14 text-center lg:text-left">
        <span className="text-[#D10064]">Experience</span> AI-Powered Bible
        Study
      </h1>
      <p className="text-sm sm:text-md text-center w-full mx-auto lg:w-full lg:text-left">
        Discover deeper insights and understanding with our AI-assisted Bible
        study platform.
      </p>
      <div className=" mt-3 flex justify-center lg:justify-start">
        <Button
          type="primary"
          style={{ background: "#d10064", color: "white", padding: "20px", marginTop:'20px' }}
        >
          Get Started for free <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
