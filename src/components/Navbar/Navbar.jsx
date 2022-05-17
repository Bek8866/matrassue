import React from 'react'
import {Navbar1,Box1,Box2,Image1,Name,Input1,Person1,Search1,Acc, SearchImg, Search2} from './nav'
import Bed from '../../img/bed1.png'



const Navbar = () => {
  return (
    <Navbar1>
    <Box1>
      <Image1 src={Bed}/>
      <Name>Matrassue</Name>
    </Box1>
<Box2>
<Search2/>
<Input1  placeholder='User' />
<Acc/>
<Person1>Behzodbek</Person1>

</Box2>
    </Navbar1>
  )
}

export default Navbar