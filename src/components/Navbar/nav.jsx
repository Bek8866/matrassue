import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '@mui/icons-material/Search';
export const Navbar1 = styled.div`

height: 7vh;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
background-color: rgba(1, 56, 77, 1);
`

export const Box1 = styled.div`
box-shadow: 1px 1px 0px 0px black;
height: 6.7vh;
width: 19.9%;
padding: 25px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Box2 = styled.div`
width: 90%;
padding: 35px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Image1 = styled.img`
margin-left: 30px;    
`

export const Name = styled.h3`
font-family: 'Sail';
color:white;
font-size: 25px;
font-weight: 100;
margin-right: 25px;
`

export const Input1 = styled.input`
font-size: 15px;
width: 350px;
height: 3.5vh;
margin-right: 60%;
border-radius: 5px;
border: none;
outline: none;
padding: 15px;
`
export const Search2 = styled(Search)`
position: absolute;
margin-left: -21%;
`



export const Acc = styled(AccountCircleIcon)`
font-size: 40px !important;
color: white;
margin-right: 10px;
`

export const Person1 = styled.h3`
color: white;
font-weight: 400;

`