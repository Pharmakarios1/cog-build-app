//third party
import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'

//components
import MobileNavigation from './MobileNavigation';

interface MobileNavProps{
  visible:boolean;
  onClose:()=>void;

}
const MobileNav: React.FC<MobileNavProps> = ({visible, onClose}) => {
  return (
    <Drawer
    title=''
    placement='left'
    onClose={onClose}
    open={visible}
    closeIcon={<CloseOutlined />}
    width={900}
    // style={{background:'pink'}}
  >
   <div className='absolute bg-[rgba(209,0,100,0.1)] inset-0 top-14'></div> 
  <MobileNavigation/>
  <div className='absolute inset-0 z-20 top-2/3 left-[10rem]'>
    <div className="flex gap-7">
    <Button type='primary'>Sign UP</Button>
    <Button type='primary'>Log In</Button>
    </div>
  </div>
  </Drawer>
  )
}

export default MobileNav