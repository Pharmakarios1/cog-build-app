
//import
import { Button } from "antd";

const navItems = [{label:"Features"},{label:'Testimonials'},{label:'Faqs'},{label:'Contact'},{label:'Pricing'}];
const Navigation = () => {
  return <div className="hidden md:flex ">
    {navItems.map((item)=>{
      return (<Button type="text" key={item.label} className="flex gap-5">
        {item.label}
      </Button>)
    })}
  </div>;
};

export default Navigation;
