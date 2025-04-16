import CustomMain from '@/components/CustomMain'
import { WifiOutlined } from '@ant-design/icons'
import React from 'react'
import NFC from './_partials/NFC'
import Transfer from './_partials/Transfer'
import Crypto from './_partials/Crypto'
import CardPayment from './_partials/Card-payment'
import Router from 'next/router'

const basePath = '/pricing'
const paymentMethod = [
  {
   icon: <WifiOutlined/>,
   title: 'Contactless(NFC)',
   description:'Speedy checkout! Just hold your device near the reader to pay',
   comp:<NFC/>,
   path: `${basePath}/contactless `
  },
  {
   icon: <WifiOutlined/>,
   title: 'Transfer',
   description:'Speedy checkout! Just hold your device near the reader to pay',
   comp:<Transfer/>,
   path: `${basePath}/transfer `
  },
  {
   icon: <WifiOutlined/>,
   title: 'Crypto Payment',
   description:'Speedy checkout! Just hold your device near the reader to pay',
   comp:<Crypto/>,
   path: `${basePath}/crypto`
  },
  {
   icon: <WifiOutlined/>,
   title: 'Card Payment',
   description:'Speedy checkout! Just hold your device near the reader to pay',
   comp:<CardPayment/>,
   path: `${basePath}/card-payment `
  },
]
// const page = () => {
//   return (
//    <CustomMain>
//    <Router>
//     <Route
//    </Router>
//    </CustomMain>
//   )
// }

export default page