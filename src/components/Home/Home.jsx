import React from 'react'
import {Home1,Menu1,Tags,P1, Img1} from './style'
import { NavLink  } from 'react-router-dom'

import House from '../../img/house.png'
import Customer from '../../img/person.png'
import Toifa from '../../img/toifa.png'
import Mahsulot from '../../img/cart.png'
import Texno from '../../img/instr.png'
import Location from '../../img/location.png'



const Home = () => {

return (
    
<Home1>

<Menu1>
<Tags>
<NavLink style={{textDecoration: 'none'}} to={`buyurtmalar`}><P1>Buyurtmalar</P1></NavLink>
<NavLink style={{textDecoration: 'none'}} to={`customers`}><P1>Сustomers</P1></NavLink>
<NavLink style={{textDecoration: 'none'}} to={`toifalar`}><P1>Toifalar</P1></NavLink>
<NavLink style={{textDecoration: 'none'}} to={`mahsulotlar`}><P1>Mahsulotlar</P1></NavLink>
<NavLink style={{textDecoration: 'none'}} to={`texnologiya`}><P1>Texnologiyalar</P1></NavLink>
<NavLink  style={{textDecoration: 'none'}} to={`manzil`}><P1>Manzil</P1></NavLink>
</Tags>
</Menu1>


</Home1>

)}

export default Home