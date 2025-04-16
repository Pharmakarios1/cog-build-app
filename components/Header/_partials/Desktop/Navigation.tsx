//import
import { Button } from "antd";
//next
import Link from "next/link";
import path from "path";

const navItems = [
  { label: "Features", path: "/features" },
  { label: "Testimonials", path: "#testimonials" },
  { label: "Faqs", path: "#faq" },
  { label: "Contact", path: "/contact" },
  { label: "Pricing", path: "/pricing" },
];
const Navigation = () => {
  return (
    <ul className="hidden md:flex gap-8">
      {navItems.map((item) => {
        return (
          <Button type="text" key={item.label} className="flex gap-5">
           <Link href={item.path}> {item.label}</Link>
          </Button>
        );
      })}
    </ul>
  );
};

export default Navigation;
