import { Button,Switch } from '@mui/material'
import React from 'react'
import {Home1, About1, In1, P3, Ps1, P2, Ps2,Span1, Ps, Psn,DelIcon,Button1, ID, Date, Phnm, Call1, Box1} from './customstyle'
// import ButtonDel from '../DeleteBtn'

const Custom = () => {
    
  return (
    <Home1>
<About1>
<In1>
<P3>
  <Box1>
  <ID>ID</ID>
<Date>Sana</Date>
<Phnm>Telefon Raqami</Phnm>
<Call1>Qayta aloqa</Call1>
  </Box1>
</P3>

<P2>
<Psn>6</Psn>
<Ps2>12:13-12.05.2021</Ps2>
<Ps2>+998 90 123 45 67</Ps2>
<Switch/>
<Ps2></Ps2>
<Button  style={{ backgroundColor: "#d61f1f22",fontSize:`1px`,marginRight:`20px`}}  startIcon={<DelIcon style={{color:`red`}}/>}/>
</P2>

<P2>
<Psn>7</Psn>
<Ps2>12:13-12.05.2021</Ps2>
<Ps2>+998 90 123 45 67</Ps2>
<Switch/>
<Ps2></Ps2>
<Button  style={{ backgroundColor: "#d61f1f22",fontSize:`1px`,marginRight:`20px`}}  startIcon={<DelIcon style={{color:`red`}}/>}/>
</P2>

<P2>
<Psn>3</Psn>
<Ps2>12:13-12.05.2021</Ps2>
<Ps2>+998 90 123 45 67</Ps2>
<Switch/>
<Ps2></Ps2>
<Button style={{ backgroundColor: "#d61f1f22",width:`1%`,marginRight:`20px`}} startIcon={<DelIcon style={{color:`red`}}/>}/>
</P2>

<P2>
<Psn>3</Psn>
<Ps2>12:13-12.05.2021</Ps2>
<Ps2>+998 90 123 45 67</Ps2>
<Switch/>
<Ps2></Ps2>
<Button style={{ backgroundColor: "#d61f1f22",width:`1%`,marginRight:`20px`}}  startIcon={<DelIcon style={{color:`red`}}/>}/>
</P2>

</In1>
</About1>

</Home1>

  )
}

export default Custom