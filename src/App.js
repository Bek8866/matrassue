import React from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import Buyurtmalar from './components/Buyurtmalar/Byutma'
import Сustomers from './components/Сustomers/Custom'
import Toifalar from './components/Toifalar/Toifa'
import Mahsulotlar from './components/Mahsulotlar/Mahs'
import Texnologiyalar from './components/Texnologiyalar/Texno'
import Manzil from './components/Manzil/Manzil'


const App = () => {
return (
    
<BrowserRouter>

<Navbar/>
<Home/>

<Routes>
<Route path='/buyurtmalar' element={<Buyurtmalar />} />
<Route path='/customers' element={<Сustomers />}/>
<Route path='/toifalar' element={<Toifalar />}/>
<Route path='/mahsulotlar' element={<Mahsulotlar />}/>
<Route path='/texnologiya' element={<Texnologiyalar />}/>
<Route path='/manzil' element={<Manzil />}/>
</Routes>

</BrowserRouter>


)}

export default App