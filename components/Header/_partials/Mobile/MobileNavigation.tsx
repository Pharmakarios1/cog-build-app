
//import
import { Button } from "antd";

const navItems = [{label:"Features"},{label:'Testimonials'},{label:'Faqs'},{label:'Contact'},{label:'Pricing'}];
const MobileNavigation = () => {
  return <div className="flex flex-col gap-5">
    {navItems.map((item)=>{
      return (<Button type="text" key={item.label} className="flex gap-5">
        {item.label}
      </Button>)
    })}
  </div>;
};

export default MobileNavigation;
