import React from 'react'


import {Home1,About1,In1,  P3,Ps,Name,Phnum,Mahs,Mqdr,Aloqa,  P2,Ps1,Name1,PsPhn,Mahs2,Ps3, Switch1,} from './bstyle'

const Byutma = () => {
    const [checked, setChecked] = React.useState(true);
    return (
    <Home1>
<About1>
<In1>

<P3>
<Ps>ID</Ps>
<Name>Ismi</Name>
<Phnum>Telefon Raqami</Phnum>
<Mahs>Mahsulot Nomlari</Mahs>
<Mqdr>Miqdor</Mqdr>
<Aloqa>Qayta aloqa</Aloqa>
</P3>


<P2>
<Ps1>6</Ps1>
<Name1>Jenny Wilson</Name1>
<PsPhn>+998 90 123 45 67</PsPhn>
<Mahs2>Ortopedik Eko matras</Mahs2>
<Ps3>4</Ps3>
<Switch1 />
</P2>

<P2>
<Ps1>7</Ps1>
<Name1>Robert Fox</Name1>
<PsPhn>+998 90 123 45 67</PsPhn>
<Mahs2>Ortopedik Eko matras</Mahs2>
<Ps3>4</Ps3>
<Switch1/>

</P2>

<P2>
<Ps1>3</Ps1>
<Name1>Wade Warren</Name1>
<PsPhn>+998 90 123 45 67</PsPhn>
<Mahs2>Ortopedik Eko matras</Mahs2>
<Ps3>4</Ps3>
<Switch1/>

</P2>

<P2>
<Ps1>3</Ps1>
<Name1>Jane Cooper</Name1>
<PsPhn>+998 90 123 45 67</PsPhn>
<Mahs2>Ortopedik Eko matras</Mahs2>
<Ps3>4</Ps3>
<Switch1/>

</P2>

</In1>
</About1>

</Home1>

  )
}

export default Byutma

